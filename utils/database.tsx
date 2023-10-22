// Placeholder
// There are five locations of Storage (Cache, State/Memory, Local, Edge?, Remote/Cloud)
// See cache.tsx, state.tsx, local.tsx, edge.tsx, remote.tsx

// LOCATIONS

export const mapDatabaseLocations = {
  memory: {},
  cache: {},
  local: {},
  edge: {}, //?
  remote: {},
};

export const arrayDatabaseLocations = Object.keys(mapDatabaseLocations)

// INSTANCES

export const mapDatabaseInstances = {
  // currently hardcoded.
  memory: 'useReactState',
  cache: 'asyncstorage',
  local: 'mkkv',
  edge: null, //?
  remote: 'supabase'
};