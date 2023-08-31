

# Development

## Clone 
- `gh repo clone orgmenta-chris/orgmenta` (github cli) or `git clone https://github.com/orgmenta-chris/orgmenta.git` (git)

## Pull
- `git pull origin master` 
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