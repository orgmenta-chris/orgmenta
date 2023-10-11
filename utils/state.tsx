// State: One of the four locations of Storage ( State/Memory, Cache, Local, Remote/Cloud).
// Placeholder

// "Need some kind 'state group' function added, for the stateparent/stateform that individual states belong to.
// e.g. useFieldState needs to have this functionality abstracted out into it, so that we can easily call an entire form.
// (also need to ensure it's performant, as it looks through all queryies and there seems to be the entire cache returned for each, for some reason.)
// Also, move this from 'state' to 'cache'?"

export const arrayStateProviders = [
  'React useState',
  'React-Query',
  'Zustand?'
]