import Papa, { ParseConfig } from 'papaparse';

// Parser

export const UtilityCsvParser = Papa;

// Parse

export type TypeCsvParse = ParseConfig & {
  header: boolean;
  skipEmptyLines: boolean;
  complete: Function;
  error: Function;
};

export const doCsvParse = async (data: any[], config: TypeCsvParse) => {
  data.map(async (document: any) => {
    try {
      const base64Data = document.uri.replace("data:text/csv;base64,", "");
      const csvText = atob(base64Data); // Decode base64 to a text CSV string
      Papa.parse(csvText, config);
    } catch (error) {
      throw new Error(`${error}`);
    }
  });
};
