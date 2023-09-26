

<!-- ----------------- -->

# Overview

## General
- This is an extremely opinionated structure.
- Readability may appear harder at first, but with scale it will quickly become easier not harder.
- At enterprise level, declarations often end up extremely convoluted, e.g. 'const useSupabaseWithLoginViaMSGraphTryTwiceWithFallbackXYZ...'. This structure helps to avoid the loss of convention and lengthiness of such declarations.
- The file / module structure keeps all exports at the top level (i.e all declarations are at the top level, not within a namespace, sub-module, or part of a class). This keeps imports as efficient as possible, and allows proper tree-shaking.
- The naming conventions (plus the above), allow for all declarations to be human-readable / as close to natural language as possible. E.g. it allows us to say 'export const useSupabaseAuth = (propsSupabaseAuth) => { validateSupabaseProps(propsSupabaseAuth); const resultSupabaseAuth = requestSupabaseAuth; return resultSupabaseAuth } etc., which is extremely clear and minimises the need for comments.
- The above sets us up for scaling to enterprise level frameworking, and also allows for future shift to monorepo npm subpackages.

## Risks
- The biggest risk is data fetching and transformation at scale, due to SQL join necessity. This can be offset with:
  - Indexing
  - Calculated fields on the entity table (via Supabase/db trigggers/functions)
  - Caching and client side database
- A secondary risk is exposure of the flexibility/structure of the system not being intuitive to users. An appropriate fascia (the UI) needs to corral the structure into clear (linear) workflows for the user

## IDE Shortcuts
- `Ctrl+K, Ctrl+0` to collapse everything and see a clear list of what's in the module.
- `Ctrl+K, Ctrl+J` to unfold all selected items.
- For collapsed declarations, hold shift while clicking the caret on the left in order to unfold all levels.


# Stack

- Language
  - Javascript
  - Typescript
- Runtime
  - Node
- Package Manager
  - Yarn
  - (Future) Yarn Workspaces
  - (Future) Lerna
- Toolkit
  - Expo
- Framework
  - React
  - React Native
  - React Native Web
- Data/Store
  - Remote: Supabase <-- cloud
  - Edge: Supabase <-- cloud
  - Local: Electric-sql.js? <--- client
  - Cache: useQuery+asyncStorage+encryption <-- client

<!-- ----------------- -->

# Versioning

## Clone 
- `gh repo clone orgmenta-chris/orgmenta` (github cli) or `git clone https://github.com/orgmenta-chris/orgmenta.git` (git)

## Pull
- `git pull origin main` 
- `git branch development` 
- `git checkout development`

## Push
- `git add .`
- `git commit -m "description_of_changes"`
- `git push -u origin development` <-- a single 'development' branch is being used until more complexity/subdivision is needed
- (Pull request -> review -> merge)

<!-- ----------------- -->

# Development

## Typescript

- If VScode is not recognising a package's types (i.e. the package is installed but imports are still underlined with a 'Cannot find module '@azure/react-native-msal' or its corresponding type declarations' error) then type `TypeScript: Restart TS Server` into the VSCode Command Palette and select it from the dropdown.

## Naming conventions

### General
- All declaration names must be made of three parts: [declaration type][module name][descriptor of functionality]
- For example, ViewStorageProvider (View = declaration type of component, Storage = module name, Provider = functionality)
- This order is specific (with the declaration type being the prefix) due to hooks having to be prefixed with 'use', which locks us into the convention.
- We include the module name in the middle part of the declaration, so that no imports will ever conflict, and all names regardless of context are clear as to which module they come from (worth the trade-off of readability, and our brains will blank it out anyway).
- Length of file / number of declarations is not an issue, and not a reason to split out into a new file. Just press `Ctrl+K, Ctrl+0` to collapse everything and see a clear list of what's in the module.

### Specific
- Hooks must start with 'use' (lowercase)
- Remote data requests must start with 'request' (lowercase)
- React native components must start with 'View' (uppercase V)
- validation functions must start with 'validate' (lowercase)
- types must start with 'Type' (uppercase T)
- react-specific utility functions that perform an action must start with 'Execute' (uppercase E)
- react-specific utility objects that have a method must start with 'Utility' (uppercase U)


## Module Structure

### Justification
See https://github.com/facebook/react-native/ as an example of what we are trying to *avoid*. (Try to) find 'Platform' in there, and see how poorly the folders are structured. If we regard 'Platform' as a reserved word, and have a top level 'Platform' folder, then it is clear where to go.
And see https://github.com/search?q=repo%3Afacebook%2Freact-native+platform&type=code for how the fragmented nature of the 'split by declaration type' causes issues at scale.
- This keeps all functionality for a functionality/module in a single pane of glass.
- It also helps to avoid deep nesting of folders (which splits the reader's view).
- It also avoids messy imports (which break very easily and is not clear as to where items are) like `import { xyz } from "../../../utils/icon";`

### Imports & Exports
- Exports must NOT be as default. Therefore ALL IMPORTS must be imported with destructing (e.g.  import { useThemeToken } from './theme' )
- Components must be arrow functions (const declarations), not functions:
  - e.g **NOT OK**: `export function ViewExampleMain(){}`
  - e.g. **CORRECT**: `export const ViewExampleMain = () => {}`
- If importing then exporting a declaration without modifying it, still do it explicitly.
  - e.g **NOT OK**: `export { useWindowDimensions } from 'react-native'`
  - e.g. **CORRECT**: `export { useWindowDimensions as originalWindowDimensions } from 'react-native'; export useWindowDimensions=originalWindowDimensions; `
  - This is in case it needs to be used within the file, and maintains a convention for readability.

### Module Scope
- AS SOON AS an external module is imported more than once in the application, it must be put into its own module file. E.g. 'Platform' was imported from react-native multiple times, so it got its own file 'platform.tsx'. 
- When a module functionality gets more complex than a single compound word, it must be put into its own module file. E.g. within window.tsx, Statusbar required a 'Statusbardimensions' AND 'Statusbarmain' functions - Therefore it got it's own file 'statusbar.tsx'.
- If a module uses two modules, you can use a compound word (e.g. Toothbrush, Football). E.g. if you wanted to create a supabase pod (using the Supabase and Pod modules) and it was too complex to put into the Supabase module, then you can split it out into a separate module called 'supabasepod' which can have declarations such as 'useSupabasepodStatistics, executeSupabasepodEdit, etc. Similarly, we currently have 'auth', 'space' and 'user'. 'auth' currently just refers to user, but if we ever needed a specific auth/session for a space, then we might want to have 'Spaceauth' and 'Userauth' (either within the user and space files, or split out into their own spaceauth and userauth files if functionality grows complex as per above rules)
- Modules are currently single file. However, it seems appropriate to have these as folders instead in the future, due to:
  - The need for a Monorepo with npm subpackages
  - The need for files other than just .tsx
    - e.g. asset files that pertain to a specific module, e.g. an image that would never be used in a different module
    - e.g. cli command files, e.g. a file that allows us to run a setup wizard to create a specific theme token.
- ALL declarations must be exported, in to maximise future flexibility and retain a single structure that doesn't distract the reader subconciously (i.e. if EVERYTHING says export, then we will blank it out in our minds subconciously.)

### Module declaration types
- FUTURE: all modules should have a 'meta' object exported ('meta[ModuleName]Info?), that describes all of the other declarations in the module. This allows us to clearly see what a module does.

### Components & Subcomponents
- We use FUNCTION components, NOT CLASS components.
- We do not use compound components (e.g. ExampleComponent.Header). We use completely separate components. The tradeoff (compound components are better for prop handling through the parent) is worth it for consistency, reusability, memoization etc.

### Strings & Keys
- Use a ` (backtick / grave accent) by default for strings, not ' (quotation marks) or " (double quotation marks).
- Use " (double quotes) for key names (to be pure, valid json)
- (Note: the codebase currently doesn't follow this convention - Work in progress.)

### Types & Interfaces
- At the moment, we haven't set clear instruction as to when to use types and when to use interfaces. To be confirmed/codified.



## Functionality

### Declarations
- ALL declarations should work 'out of the box' in any context.
  - E.g. You should be able to have a component called in App.tsx and it immediately work (falling back gracefully as necessary) without any props.
  - E.g. a utility function should always return a useful error or value
  - This needs to be tested before deployment to production.

### Client, Edge and Server functions
- All functions should work (where possible) on the client side, on Supabase Edge, and Supabase server side. 
- These functions should be identical in wording where possible, to make deployment easier (i.e. you should be able to write once, deploy everywhere with a single command from the CLI.)


### Components

#### Values
- Values that are being updated must register this in the UI. For example, if a row is being deleted from a table, that row must be shown to be in an updating state while being deleted.
- If a form field is being updated, it must show a spinner/indicator.
- Updating values must be changed in the UI as an 'optimistic update'
- The values must then automatically update on the page when confirmed.
- I.e. do the opposite of what MS azure does.


<!-- ----------------- -->

# Testing

## Android Native
- Install the Expo Go (https://expo.dev/client) app: https://play.google.com/store/apps/details?id=host.exp.exponent
- In Android, you may need to hold-press the Expo Go app icon, click 'info', and force stop. Then go to 'Storage' and delete all data.
- In Vscode/IDE/CLI, `yarn start` or `yarn start --tunnel`
- If no qr code is shown in the CLI, press w to start web (which will generate the qr code)
- It's a good idea to screenshot the qr code and have it up in a tab ready for reuse if necessary (as the expo app crashes often)
- G to your camera app and scan the qr code.
- Fast refresh will be turned on by default (but note that this sometimes does not work on --tunnel)
- You can also manually refresh by shaking the device (pops up the expo menu) and clicking reload.
- If the expo app says 'Something went wrong' then force stop & clear data, and restart yarn start / yarn start --tunnel

## iOS Native
- Install the Expo Go (https://expo.dev/client) app: https://apps.apple.com/us/app/expo-go/id982107779
- In Android, you may need to hold-press the Expo Go app icon, click 'info', and force stop. Then go to 'Storage' and delete all data.
- In Vscode/IDE/CLI, `yarn start` or `yarn start --tunnel`
- If no qr code is shown in the CLI, press w to start web (which will generate the qr code)
- G to your camera app and scan the qr code.


## Android Emulator

todo

## iOS Emulator

todo


## Web

- `yarn start`
- press `w`


<!-- ----------------- -->

# Deployment

## Web
- `expo build:web` then
- Copy redirect file into web-build folder (Ctrl + drag the `_redirects` file into the web-build build folder)
- `netlify deploy --prod`

## Android
- (TODO) 

## iOS
- (TODO) 

## MS Windows
- (TODO) - run an expo prebuild first then use the react-native-windows package. 

## MacOS
- (TODO) - run an expo prebuild first then use the react-native-windows package.

## Linux
- (Not planned)


# Database 

## Remote

### Query Speed
If queries start timing out / taking too long:
- Ensure that caching is enabled for that query, if appropriate
- Ensure appropriate indexing on the remote database table/view
- If needed, a supabase function/trigger? can be used to copy information from the relationship table to the entities table (e.g. a countofactiveparents calculation). This is a last resort and should only be implemented after discussion.
- If needed, a supabase function/trigger? can be used to copy information from the relationship / entities table to a unique table of its own. This is a last resort and should only be implemented after discussion.

<!-- ----------------- -->

# General

## What is Orgmenta?
- An Entity Relationship Management System 

## What does Orgmenta aim to be?
- An Enterprise Resource Planning (ERP) application
- A Customer Relationship Manager (CRM)
- A Sales and Quoting Tool
- A business governance/executive decision making tool
- A project management tool and task tracker
- A timesheet/time entry/journalling/recording app
- A payroll system
- A payables and disbursement system
- A receivables and reconciliation system
- A full accounting package


<!-- ----------------- -->

# Schemas

## Entity
{

}
