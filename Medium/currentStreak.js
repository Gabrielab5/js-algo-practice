/*
Create a function that takes the current day (e.g. "2019-09-30"), an array of date objects and returns the "current streak" (i.e. number of consecutive days in a row).

Examples
currentStreak("2019-09-23", [
 {
 date: "2019-09-18"
 },
 {
 date: "2019-09-19"
 },
 {
 date: "2019-09-21"
 },
 {
 date: "2019-09-22"
 },
 {
 date: "2019-09-23"
 }
]) ➞ 3

currentStreak("2019-09-25", [
 {
 date: "2019-09-16"
 },
 {
 date: "2019-09-17"
 },
 {
 date: "2019-09-21"
 },
 {
 date: "2019-09-22"
 },
 {
 date: "2019-09-23"
 }
]) ➞ 0
Notes
The array of dates is sorted chronologically.
The today parameter will always be greater than or equal to the last date in the array.
An empty array should return 0.
*/

function currentStreak( currentDay, Dates ) {
  if (Dates.length ==0) return 0;

  const toDate = (dateStr) => new Date(dateStr);

  const areConsecutive = (date1, date2) => {
    const oneDay = 1000 * 60 * 60 * 24; 
    return toDate(date2) - toDate(date1) === oneDay;
  };

  let streak =0;
  let currentDate = toDate(currentDay);

  for( let i= Dates.length -1; i>=0; i--) {
    const date = toDate(Dates[i].date);
    if ( currentDate === date || areConsecutive(date, currentDate )){
      streak++;
      currentDate = date;
    }
    else return streak;
  }

  return streak;
}

exports.solution = currentStreak;