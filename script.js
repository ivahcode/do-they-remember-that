let emotionalImpact = null;
let eventDay = null;
let eventMonth = null;
let eventYear = null;
let currentDay = 27;
let currentMonth = 4;
let currentYear = 2025;
let daysSince = null;

//prompts users to enter the date of their embarrassing event, and how much the event emotionally impacted the witnesses
emotionalImpact = prompt('On a scale of 1 to 5, rate how much emotional impact your embarrassing moment had on the witnesses, with 1 being the least impact: ');
eventYear = Number(prompt('Enter the year your embarrassing event occured in: '));
eventMonth = Number(prompt('Enter the month: '));
eventDay = Number(prompt('Enter the day: '));

//uses user's inputted information to calculate probability that witnesses remember the embarrassing event
forgettingConstant = 0.5 / (emotionalImpact ** 3.12); //calculates the forgetting rate constant based on the emotional impact of the embarrassing event, ranging from 0.0033 to 0.5
daysSince = (currentYear - eventYear)*365 + (currentMonth - eventMonth)*30.44 + (currentDay - eventDay); //calculates the number of days since the embarrassing event
probRemembered = 100 * (2.71828 ** (-forgettingConstant * daysSince)); //calculates the probability that witnesses remember the embarrassing event

console.log('The probability that the witnesses of your embarrassing event still remember it is ' + probRemembered);

