

# Development

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


# Deployment

## Web
- `expo build:web` then
- Copy redirect file into web-build folder
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


# Geneal

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


# Schemas

## Entity
{

}


# Guidelines

## Components

### Values
Values that are being updated must register this in the UI. For example, if a row is being deleted from a table, that row must be shown to be in an updating state while being deleted.
If a form field is being updated, it must show a spinner/indicator.
Updating values must be changed in the UI as an 'optimistic update' w
The values must then automatically update on the page when confirmed.
I.e. do the opposte of what MS azure does.