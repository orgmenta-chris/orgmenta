
// 

export const mapDeclarationType: Record<string, { id: string, prefix: string, description: string, notes: string, rule: string }> = {
  "hook": {
    id: "todo",
    prefix: "use",
    description: "React Hook",
    notes: "Hooks must start with 'use' (lowercase)",
    rule: ""
  },
  "remote data request": {
    id: "todo",
    prefix: "",
    description: "React Hook",
    notes: "Remote data requests must start with 'request' (lowercase)",
    rule: ""
  },
  "component": {
    id: "todo",
    prefix: "View",
    description: "React native components",
    notes: "React native components must start with 'View' (uppercase V)",
    rule: "Must be function arrow components. Maybe change to 'Component'? As view is used in other parlance"
  },
  "validation": {
    id: "todo",
    prefix: "validate",
    description: "React Utility Package with at least one method",
    notes: "validation functions must start with 'validate' (lowercase)",
    rule: ""
  },
  "type": {
    id: "todo",
    prefix: "Type",
    description: "React Utility Package with at least one method",
    notes: "types must start with 'Type' (uppercase T)",
    rule: ""
  },
  "execute": {
    id: "todo",
    prefix: "Execute",
    description: "React Utility Package with at least one method",
    notes: "react-specific utility functions that perform an action must start with 'Execute' (uppercase E)",
    rule: ""
  },
  "utility": {
    id: "todo",
    prefix: "Utility",
    description: "React Utility Package with at least one method",
    notes: "react-specific utility objects that have a method must start with 'Utility' (uppercase U)",
    rule: ""
  },
  "synchronous": {
    id: "todo",
    prefix: "do",
    description: "React Utility Package with at least one method",
    notes: "General synchronous functions must start with 'do' (lowercase). See crypto.tsx for examples.",
    rule: ""
  },
  "asynchronous": {
    id: "todo",
    prefix: "async",
    description: "React Utility Package with at least one method",
    notes: "General async functions must start with 'async' (lowercase). See crypto.tsx for examples.",
    rule: ""
  },
  "array": {
    id: "todo",
    prefix: "array",
    description: "",
    notes: "",
    rule: ""
  },
  "object": {
    id: "todo",
    prefix: "object",
    description: "A singular object",
    notes: "",
    rule: ""
  },
  "objects": {
    id: "todo",
    prefix: "map",
    description: "A key:value object used for lookups",
    notes: "",
    rule: ""
  }
};

export const arrayDeclarationType: string[] = Object.keys(mapDeclarationType);


// RULES

// todo
// export const mapDeclarationRule = {
// }