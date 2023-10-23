
// MONTHLABELS

export const mapDateMonthlabels = {
  0: "Jan",
  1: "Feb",
  2: "Mar",
  3: "Apr",
  4: "May",
  5: "Jun",
  6: "Jul",
  7: "Aug",
  8: "Sep",
  9: "Oct",
  10: "Nov",
  11: "Dec"
};

// CONSTANTS

export const mapDateConstants = {
  yearInDays: 365, // days in a year
  weekInDays: 7, // days in a week
  dayInHours: 24,  // seconds in one day
  dayInMinutes: 24 * 60,  // seconds in one day
  dayInSeconds: 24 * 60 * 60,  // seconds in one day
  dayInMilliseconds: 24 * 60 * 60 * 1000 // milliseconds in one day
}

// SHIFT

export const getDateShifted = (date:Date, numDays:number) => {
  // Return a new date shifted + or - a certain number of days
  const dateNew = new Date(date);
  dateNew.setDate(dateNew.getDate() + numDays);
  return dateNew;
}

// CONVERT

export const getDateConverted = (obj:any) => {
  // convert to date (can be a parseable string, a millisecond timestamp, or a Date object)
  const dateConverted = obj instanceof Date ? obj : new Date(obj);
  return dateConverted
}

// BEGINNINGTIME

export const getDateBeginningtime = (date:Date) => {
  // Get the beginning time of a date (returns a new Date object set to midnight of the provided date).
  const dateTime = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  return dateTime
}
