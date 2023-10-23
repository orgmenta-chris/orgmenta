import _ from "underscore";

// VALIDATE

export const validateObjectIsobject = <T extends any>(value: T): boolean => {
  // return true if value is an object (note this INCLUDES arrays and functions)
  return typeof value === "object" && !Array.isArray(value);
};

// ISLITERAL

export const validateObjectIsliteral = (value: any): boolean => {
  // return true if value is an object (note this FILTERS OUT arrays and functions)
  return _.isObject(value) && !_.isArray(value) && !_.isFunction(value);
};

// HASKEYS

export const validateObjectHaskeys = (value: any): boolean => {
  // return true if object has at least one property (not necessary with values in them)
  return _.isObject(value) && _.keys(value).length > 0;
};

// HASVALUES

export const validateObjectHasvalues = (value: any): boolean => {
  // return true if object has at least property with a value in it.
  return (
    _.isObject(value) &&
    _.some(value, (v: any) => v !== undefined && v !== null)
  );
  // Expected behaviour:
  // const a = {test: 'example'} // returns TRUE
  // const a = {test: null} // returns false
  // const b = {test: undefined} // returns false
  // const c = 'string' // returns false
  // const d = 1 // returns false
  // const e = undefined // returns false
  // const f = null // returns false
  // const g = {test: {}} // returns TRUE
};

// MERGE

export const doObjectMerge = (
  objArray: Array<Record<string, any>>
): Record<string, any> => {
  return _.extend({}, ...objArray);
};

// NESTING
type TypeObjectNesting = {
  id: number;
  parent?: number;
  children?: TypeObjectNesting[];
  [key: string]: any;
};

export const doObjectNesting = (flatList: TypeObjectNesting[]): TypeObjectNesting[] => {
  const roots: TypeObjectNesting[] = [];
  const lookup: Record<number, TypeObjectNesting> = {};

  flatList.forEach(node => {
    lookup[node.id] = { ...node, children: [] };
  });

  flatList.forEach(node => {
    if (node.parent !== undefined && lookup[node.parent]) {
      lookup[node.parent].children!.push(lookup[node.id]);
    } else {
      roots.push(lookup[node.id]);
    }
  });

  return roots;
};

// export const exampleObjectNesting = () => {
//   // Example usage
//   const flatList: TypeObjectNesting[] = [
//     {
//       id: 1100,
//       parent: 110,
//       status: "5. Hold",
//       name_singular: "plan",
//       display_singular: "Plan",
//       description: "Create your business plan and use it to keep the business aiming in the right direction",
//       summary:
//         "End-to-end business planning, from intitial idea through to implementation plans",
//       notes: `"Business Plan"
//       Choosing the business offering
//       Red blue ocean
//       Something that won't burn you out, won't make you hate it, dont mind hobby being no longer a hobby, sustainable <--https://old.reddit.com/r/smallbusiness/comments/171myh4/why_do_people_keep_trying_to_open_restaurants/
//       if lifestyle biz, know that it is.
//       something without a dead-end
//       something without unnecessary risk
//       no unnecessary dependency on platforms, current environment, political upheaval etc.
//       something expandable to the size you want and need
//       long term survival
//       something you gave the ability to learn /grow into (yourself, or able to engage necessary skills and rssources from others)
//       something that adds value to the world, does not
//       something where if you ikebana all of your externalities, it will still be sustainable
//   `,
//       nickname: "governance-model-plan",
//     },
//     {
//       id: 11000,
//       parent: 1100,
//       status: "5. Hold",
//       name_singular: "mission",
//       display_singular: "Mission",
//       description:
//         "Manage your mission statement / a clear summary of the purpose of the business",
//       summary:
//         "Analygous to a peer reviewed scientific paper having an 'abstract'",
//       nickname: "governance-model-plan-mission",
//     },
//     {
//       id: 11001,
//       parent: 1100,
//       status: "5. Hold",
//       name_singular: "values",
//       display_singular: "Values",
//       description: "Company/Organizational Values",
//       summary:
//         "What are your Brand values? Consider these to be products, as you are essentially selling 'trust' or other company values to all of your stakeholders.",
//       nickname: "governance-model-plan-values",
//     },
//     {
//       id: 11002,
//       parent: 1100,
//       status: "5. Hold",
//       name_singular: "goals",
//       display_singular: "Goals",
//       description: "Company/Organizational Goals",
//       summary: "Top level objectives / goals",
//       nickname: "governance-model-plan-goals",
//     },
//     {
//       id: 11003,
//       parent: 1100,
//       status: "5. Hold",
//       name_singular: "justification",
//       display_singular: "Justification",
//       description:
//         "Summary of market research and other proofs of viability/reasons for operating",
//       summary: "",
//       nickname: "governance-model-plan-justification",
//     },
//     {
//       id: 11004,
//       parent: 1100,
//       status: "5. Hold",
//       name_singular: "capital",
//       display_singular: "Capital",
//       description: "Summary of Accounts/Finance and other resources",
//       summary:
//         "Financial resources or assets employed to start, operate, and grow your business.",
//       nickname: "governance-model-plan-justification",
//       notes: `
//                 Financial Capital: Money used to fund a business, including initial capital, working capital, and growth capital.
//                 Human Capital: The skills, knowledge, experience, and abilities of employees.
//                 Social Capital: The value derived from an individual's or business's network of relationships, which can be used to gain resources or advantages.
//                 Intellectual Capital: Intangible assets like patents, trademarks, and copyrights that contribute to a business's competitive advantage.
//                 Natural Capital: Natural resources that can be used to produce goods or services.
//                 Physical Capital: Tangible assets like machinery, buildings, and infrastructure used in the production of goods or services.
//                 Venture Capital: Funding provided by investors to startups and small businesses expected to have long-term growth potential.
//                 Debt Capital: Money borrowed through various means, including loans and bonds, to run the business.
//                 Equity Capital: Funds raised by a business in exchange for shares of ownership in the company.
//                 Working Capital: Short-term assets minus short-term liabilities, used for day-to-day operations.
//             `,
//     },
//     {
//       id: 1101,
//       parent: 110,
//       status: "5. Hold",
//       name_singular: "structure",
//       display_singular: "Structure",
//       description: "Business structure / hierarchy",
//       summary: null,
//       nickname: "governance-model-structure",
//     },
//     {
//       id: 11010,
//       parent: 1101,
//       status: "5. Hold",
//       name_singular: "ownership",
//       display_singular: "ownership",
//       description: "Business ownership structures",
//       summary:
//         "C-Corp / LLC / Sole Trader or Proprietorship / Partnership Cooperative / Umbrella & holding corps / Franchise / Non-profit / Charity / etc.",
//       nickname: "governance-model-structure-ownership",
//       types: [
//         "LLC",
//         "S-Corp",
//         "C-Corp",
//         "Sole Trader / Proprietorship",
//         "Umbrella",
//         "Holding",
//         "Franchise",
//         "Unlimited Company - UK, ROI and others",
//         "Società a responsabilità limitata (SRL) - Italy",
//         "Proprietary Limited Company (Pty Ltd) - Australia",
//         "Aktiebolag (AB) - Sweden",
//         "Kabushiki Kaisha (KK) - Japan",
//         "Société Anonyme (SA) - France",
//         "Gesellschaft mit beschränkter Haftung (GmbH) - Germany",
//         "Public Limited Company (PLC) - UK",
//         "Joint Venture",
//         "Professional LLC (PLLC)",
//         "Professional Corporation (PC)",
//         "B-Corporation",
//         "Non Profit",
//         "Charity",
//       ],
//     },
//     {
//       id: 1102,
//       parent: 110,
//       status: "5. Hold",
//       name_singular: "jurisdictions",
//       display_singular: "Jurisdictions",
//       summary:
//         "Where you are operating (unions, countries, states, counties, markets)",
//       description: null,
//       nickname: "governance-model-jurisdictions",
//     },
//     {
//       id: 1103,
//       parent: 110,
//       status: "5. Hold",
//       name_singular: "roadmap",
//       display_singular: "Roadmap",
//       description: null,
//       summary: "Your company roadmap and timeline",
//       nickname: "governance-model-roadmap",
//     },
//     {
//       id: 1104,
//       parent: 110,
//       status: "5. Hold",
//       name_singular: "growth",
//       display_singular: "Growth",
//       summary: null,
//       description: null,
//       nickname: "governance-model-growth",
//     },
//     {
//       id: 111,
//       parent: 11,
//       status: "5. Hold",
//       name_singular: "counsel",
//       display_singular: "Counsel",
//       description: null,
//       summary: "Advice and consultation from specialist areas",
//       nickname: "governance-counsel",
//     },
//     {
//       id: 1110,
//       parent: 111,
//       status: "5. Hold",
//       name_singular: "legal",
//       display_singular: "Legal",
//       description: "",
//       summary: "",
//       nickname: "governance-counsel-legal",
//     },
//     {
//       id: 1111,
//       parent: 111,
//       status: "5. Hold",
//       name_singular: "finance",
//       display_singular: "Finance",
//       description: "",
//       summary: "The CFO role (Chief Financial Officer)",
//       nickname: "governance-counsel-finance",
//     },
//     {
//       id: 1112,
//       parent: 111,
//       status: "5. Hold",
//       name_singular: "technology",
//       display_singular: "Technology",
//       description: "",
//       summary:
//         "The CIO role (Chief Information Officer) / CTO (Chief Technology Officer)",
//       nickname: "governance-counsel-technology",
//     },
//   ];
//   const nestedList = doObjectNesting(flatList);
//   console.log(JSON.stringify(nestedList, null, 2));
// };
// exampleObjectNesting();
