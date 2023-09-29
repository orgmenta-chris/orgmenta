// Placeholder / basic priorities.
// Uses ITIL structure & terminology.

export const objectPriorityPriorities = [
  {
    number: 1,
    name: "P1",
    description: 'High Priority',
  },
  {
    number: 2,
    name: "P2",
    description: 'Medium Priority',
  },
  {
    number: 3,
    name: "P3",
    description: 'Low Priority',
  },
  {
    number: 4,
    name: "P4",
    description: 'No SLA / Best Effort',
  },
]

// Urgency
// How quickly a resolution is required, speed at which the incident will impact the business operations if not resolved.
export const objectPriorityUrgencies = [
  {
    number: 1,
    name: "U1",
    description: 'Operations at a standstill',
  },
  {
    number: 2,
    name: "U2",
    description: 'There is a workaround to the operation',
  },
  {
    number: 3,
    name: "U3",
    description: 'Not yet preventing operations',
  },
]

// Impact
// the extent to which an incident affects business processes and outcomes.The number of users affected, the criticality of the affected system, or the potential financial loss.
export const objectPriorityImpacts = [
  {
    number: 1,
    name: "I1",
    description: 'All users',
  },
  {
    number: 2,
    name: "I2",
    description: 'Some users',
  },
  {
    number: 3,
    name: "I3",
    description: 'Single user',
  },
]

export const doPriorityMatrix = (impact:number,urgency:number,mode:string) => {
  let priority = ()=>{
    if(mode==='calculation_default'){
      // default priority matrix calculation.
      return Math.round(impact*urgency)/3 // example of what the calculation might be
    }
    else if(mode==='table_static'){
      // return a value from a table that looks like this:
      // | Impact \ Urgency | Low  | Medium | High  |
      // |------------------|------|--------|-------|
      // | Low              | P4   | P3     | P3    |
      // | Medium           | P3   | P2     | P2    |
      // | High             | P2   | P1     | P1    |
      const table = { // static at the moment, but clients will sometimes need to set their own table/matrix.
        '11': 'P1',
        '12': 'P1',
        '13': 'P2',
        '21': 'P1',
        '22': 'P2',
        '23': 'P3',
        '31': 'P2',
        '32': 'P3',
        '33': 'P4',
      };
      const key = impact && urgency && `${impact}${urgency}` as keyof typeof table;
      return key ? table[key] : 'P4'; // Default to P4 if key not found
      }
  }
  return priority
}

