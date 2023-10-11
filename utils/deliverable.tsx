// STEP

export type TypeDeliverableStep = {
  description: string;
  info?: string;
};

export const mapDeliverableStep: Record<string, TypeDeliverableStep> = {
  Requirements: {
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
      "find react native web compatible, i.e. react-native or react with no divs etc. Install.",
  },
  "Initial prep": {
    description: "import and export everything with correct naming convention",
  },
  "Build out": {
    description: "add the functionality necessary",
  },
  Refactoring: {
    description: "ensure everything is modular and exported as per conventions",
  },
  "Proof of concept": {
    description: "Hook everything up for testing in the test page",
  },
  "Discussion & Planning": {
    description: "",
  },
  "Final form": {
    description: "",
  },
};

export const arrayDeliverableStep: string[] = Object.keys(mapDeliverableStep);

export const exampleDeliverableStep = mapDeliverableStep['Mailgun']?.description;  // Access a property
