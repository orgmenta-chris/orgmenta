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
  Orientation,
} from "expo-print";

// MAIN

// If you want to just import the whole thing:
export const UtilityPrintMain = Print;

// OPTIONS

export type TypePrintOptions = PrintOptions;

// ORIENTATION 

export type TypePrintOrientation = OrientationType; // portrait or landscape

export const UtilityPrintOrientation = Orientation;
// e.g. {orientation: Orientation.portrait} or  {orientation: Orientation.landscape}

// PRINT

export const asyncPrintPrint = printAsync;

// SELECT

export const asyncPrintSelect = selectPrinterAsync;

// FILE

export const asyncPrintFile = printToFileAsync;

export type TypePrintFileoptions = FilePrintOptions;
export type TypePrintFileresult = FilePrintResult;

// PRINTER

export type TypePrintPrinter = Printer;
