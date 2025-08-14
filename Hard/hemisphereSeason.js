/*
In this challenge, you are given a date and you have to determine the correspondent season in a certain hemisphere of Earth.

You have to use the ranges given by the meteorological seasons definition, accordingly to the following table:

Start	End	North Hemisphere	South Hemisphere
March, 1	May, 31	Spring	Autumn
June, 1	August, 31	Summer	Winter
September, 1	November, 30	Autumn	Spring
December, 1	February, 28***	Winter	Summer
Given two strings hemisphere (can be "N" for the North hemisphere or "S" for the South hemisphere) and date (name and day of the month), implement a function that returns a string with the season name, accordingly to the above table.

Examples
hemisphereSeason("N", "June, 30") ➞ "Summer"

hemisphereSeason("N", "March, 1") ➞ "Spring"

hemisphereSeason("S", "September, 22") ➞ "Spring"
Notes
During leap years the end date of Winter in the northern hemisphere is the 29th day of February (last day of Summer in the southern hemisphere). In this challenge, years are not used, so the last day of February will always be the 28th.
*/

function hemisphereSeason(hemisphere, date) {
  const [monthStr, dayStr] = date.split(',')
  const day = parseInt(dayStr,10)
  const months = {
    "January": 1,
    "February": 2,
    "March": 3,
    "April": 4,
    "May": 5,
    "June": 6,
    "July": 7,
    "August": 8,
    "September": 9,
    "October": 10,
    "November": 11,
    "December": 12 
  }
  const month = months[monthStr]
  let season =""
  // March 1 - May 31
  if (month >= 3 && month <= 5) {
    season = (hemisphere === "N") ? "Spring" : "Autumn";
  }
  // June 1 - August 31
  else if (month >= 6 && month <= 8) {
    season = (hemisphere === "N") ? "Summer" : "Winter";
  }
  // September 1 - November 30
  else if (month >= 9 && month <= 11) {
    season = (hemisphere === "N") ? "Autumn" : "Spring";
  }
  // December 1 - February 28
  else if (month === 12 || month <= 2) {
    season = (hemisphere === "N") ? "Winter" : "Summer";
  }
  return season;
}

exports.solution = hemisphereSeason;
