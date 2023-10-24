// Placeholder / in development by C


// STEP

export type TypeDeliverableStep = {
  description: string;
  info?: string;
};

export const mapDeliverableStep: Record<string, TypeDeliverableStep> = {
  "Requirements": {
    description:
      "what is the target for the specific feature, what are the needs",
  },
  "Internal tools": {
    description:
      "what do we already have at our disposal / do we already have the functionality",
    info: "Pin the test and any relevant files in vscode. Import anything useful into the deliverable file",
  },
  "External tools": {
    description:
      `
      If for react-native: find react native web compatible, i.e. react-native or react with no divs etc. Install.
      If external service: check available API, ensure it has all the features we need, check pricing and discuss where necessary
      `,
  },
  "Initial prep": {
    description: "import and export everything with correct naming convention",
  },
  "Build out": {
    description: "add the functionality necessary but also ensure that we just export anything out of the box",
  },
  "Refactoring": {
    description: "ensure everything is modular and exported as per conventions",
  },
  "Proof of concept": {
    description: "Hook everything up for part1 testing (dev testing) in the test page",
  },
  "Discussion & Planning": {
    description: "Assess next steps",
  },
  "Final form": {
    description: "",
  },
  "Testing": {
    description: "(C) - part2 testing (functionality testing)",
  },
};

export const arrayDeliverableStep: string[] = Object.keys(mapDeliverableStep);

export const exampleDeliverableStep = mapDeliverableStep['Mailgun']?.description;  // Access a property
