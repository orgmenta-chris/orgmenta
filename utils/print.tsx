
import * as Print from "expo-print";
import {
  printAsync,
  selectPrinterAsync,
  printToFileAsync,
  FilePrintOptions,
  FilePrintResult,
  OrientationType,
  PrintOptions,
  Printer,
  Orientation
} from 'expo-print';

// If you want to just import the whole thing:

export const UtilityPrintMain = Print;

// others

// todo naming conventions and any other export


// Orientation (portrait or landscape)

export type TypePrintOrientation = OrientationType;

export const UtilityPrintOrientation = Orientation; 
// e.g. {orientation: Orientation.portrait} or  {orientation: Orientation.landscape} 


// Print

export const asyncPrintPrint = printAsync;

// Select

export const asyncPrintSelect = selectPrinterAsync;


// File

export const asyncPrintFile = printToFileAsync;

export type TypePrintFileoptions = FilePrintOptions;
export type TypePrintFileresult = FilePrintResult;

// Printer

export type TypePrintPrinter = Printer;