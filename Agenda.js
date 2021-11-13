var today = new Date();
var dayNow = today.getDay();
var greeting;
var hourNow = today.getHours();

var agenda = [
    "<li><b>8:00am - cis-3623</b>",
    "<li><b>11:00am - cis-4043</b>",
    "<li><b>12:30pm - mgmt-3212</b>",
    "<li><b>3:00pm - nap</b>",
    "<li><b>6:00pm-9:00pm - cis-4103</b>"
    
]

console.log("Compiling Greeting");

if(hourNow > 17) {
    greeting = "Good Evening To You";
} else if(hourNow > 12) {
    greeting = "Good Afternoon To You";
} else if(hourNow > 0) {
    greeting = "Good Morning To You";
} else {
    "Welcome!";
}

document.write("<h2>" + greeting + "</h2>");
document.write("Today is: " + agenda[dayNow]);


console.log("Initializing agenda for the day: " + dayNow);

