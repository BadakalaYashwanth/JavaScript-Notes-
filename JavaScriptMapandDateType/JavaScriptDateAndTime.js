// JavaScriptDateAndTime.js

const departure = new Date();

const weekdays = [
  "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"
];

const months = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];

const dateString =
  `${weekdays[departure.getDay()]} ${departure.getDate()}, ` +
  `${months[departure.getMonth()]} ${departure.getFullYear()}`;

console.log(dateString);

// Force hour for testing
departure.setHours(5);

const hrs = departure.getHours();

if (hrs >= 0 && hrs < 12) {
  console.log("Good Morning");
}
else if (hrs >= 12 && hrs < 18) {
  console.log("Good Afternoon");
}
else {
  console.log("Good Night");
}
