
// STEP

export type TypeDeliverableStep = {
  step: number;
  description: string;
};

export const mapDeliverableStep: Record<string, any> = {
  "Requirements": {
    step: 1,
    description:
      "what is the target for the specific feature, what are the needs",
  },
  "Internal tools": {
    step: 2,
    description:
      "what do we already have at our disposal / do we already have the functionality",
  },
  "External tools": {
    step: 3,
    description:
      "find react native web compatible, i.e. react-native or react with no divs etc. Install.",
  },
  "Initial prep": {
    step: 4,
    description: "import and export everything with correct naming convention",
  },
  "Build out": {
    step: 5,
    description: "add the functionality necessary",
  },
  Refactoring: {
    step: 6,
    description: "ensure everything modular and exported as per conventions",
  },
  "Proof of concept": {
    step: 7,
    description: "Hook everything up for testing in the test page",
  },
  "Discussion & Planning": {
    step: 8,
    description: "",
  },
  "Final form": {
    step: 9,
    description: "",
  },
};

export const arrayDeliverableStep: string[] = Object.keys(mapDeliverableStep);

// EXAMPLE

// export const exampleDeliverableStep = mapDeliverableSteps['Mailgun']?.description;  // Access a property
