
var upperChest = ["Incline Bench", "Incline DB Bench", "Upper Chest Cable"]
var lowerChest = ["Decline Bench", "Decline DB Bench", "Lower Chest Cable"]
var chest = ["Bench", "Machine Bench", "DB Bench"]

var tris = ["Cable Pulldowns", "Ski Flies", "Overhead Cable Pulls", "Tricep Machine", "Single Hand Cable Pulldowns", "Tricep Dips"]

var back = ["Machine Row", "Straight Bar Pulldown"]
var latBack = ["Cable Pulldown", "One Hand Machine Rows"]

var longBis = ["Close Grip DB Curl", "Close Grip Preacher Curl"]
var shortBis = ["DB Curl", "Barbell Curl", "Cable Curl"]
var brachBis = ["DB Hammer Curls", "Cable Rope Curls", "Barbell Reverse Grip Curls"]

var shoulders = ["DB Shoulder Press", "Barbell Shoulder Press", "Shoulder Cable Side Lifts"]
var frontShoulders = ["DB Front Raises", "Barbell Front Raises", "Cable Front Raises"]
var backShoulders = ["Cable Crossover Pulls", "Cable Face Pulls"]
var trapsShoulders = ["DB Shoulder Shrugs", "Barbell Shoulder Shrugs", "Cable Shoulder Shrugs"]

var legs = ["Barbell Squats", "Leg Press", "Pause Squats", "Front Squats"]
var hamLegs = ["Hamstring Curl Machine", "Cable Hamstring Curl"]
var quadLegs = ["Quad Machine Extensions", "Quad Machine Switch Extensions"]

var abs = ["Hanging Knee Raise", "Hanging Leg Raise", "Hold Ab Curls"]

var topForearms = ["Reverse Grip Barbell Forearm Curl", "Reverse Grip Cable Forearm Curl"]
var bottomForearms = ["Barbell Forearm Curl", "Cable Forearm Curl"]


var chestClick = document.getElementById("chest")
var trisClick = document.getElementById("tris")
var backClick = document.getElementById("back")
var bisClick = document.getElementById("bis")
var shouldersClick = document.getElementById("shoulders")
var legsClick = document.getElementById("legs")
var absClick = document.getElementById("abs")
var forearmsClick = document.getElementById("fore")

var submit = document.getElementById("create-btn")

//duplicate checker
//print videos of workouts with each workout
submit.addEventListener("click", function() {
    //window.open("WorkoutPage.html") 

    if(chestClick.checked) {
        document.writeln("<h2>Chest Exercises:</h2>")
        document.writeln("<p>Chest(Upper): " + upperChest[Math.floor(Math.random() * upperChest.length)] + "</p>")
        document.writeln("<p>Chest: " + chest[Math.floor(Math.random() * chest.length)] + "</p>")
        document.writeln("<p>Chest(Lower): " + lowerChest[Math.floor(Math.random() * lowerChest.length)] + "</p>")
        }

        if(trisClick.checked) {
            //var pulledValues = []
                //first
                document.writeln("<h2>Triceps Exercises:</h2>")
                document.writeln("<p>Triceps: " + tris[Math.floor(Math.random() * tris.length)] + "</p>")
                document.writeln("<p>Triceps: " + tris[Math.floor(Math.random() * tris.length)] + "</p>")
                document.writeln("<p>Triceps: " + tris[Math.floor(Math.random() * tris.length)] + "</p>")
        }

        if(backClick.checked) {
            document.writeln("<h2>Back Exercises:</h2>")
            document.writeln("<p>Back: " + back[Math.floor(Math.random() * back.length)] + "</p>")
            document.writeln("<p>Back: " + back[Math.floor(Math.random() * back.length)] + "</p>")
            document.writeln("<p>Lats: " + latBack[Math.floor(Math.random() * latBack.length)] + "</p>")
        }

        if(bisClick.checked) {
            document.writeln("<h2>Bicep Exercises:</h2>")
            document.writeln("<p>Biceps(short head): " + shortBis[Math.floor(Math.random() * shortBis.length)] + "</p>")
            document.writeln("<p>Biceps(long head): " + longBis[Math.floor(Math.random() * longBis.length)] + "</p>")
            document.writeln("<p>Biceps(brachialis): " + brachBis[Math.floor(Math.random() * brachBis.length)] + "</p>")
        }

        if(shouldersClick.checked) {
            document.writeln("<h2>Shoulder Exercises:</h2>")
            document.writeln("<p>Shoulders: " + shoulders[Math.floor(Math.random() * shoulders.length)] + "</p>")
            document.writeln("<p>Shoulders(Front): " + frontShoulders[Math.floor(Math.random() * frontShoulders.length)] + "</p>")
            document.writeln("<p>Shoulders(Back): " + backShoulders[Math.floor(Math.random() * backShoulders.length)] + "</p>")
            document.writeln("<p>Shoulders(Traps): " + trapsShoulders[Math.floor(Math.random() * trapsShoulders.length)] + "</p>")
        }

        if(legsClick.checked) {
            document.writeln("<h2>Leg Exercises:</h2>")
            document.writeln("<p>Legs: " + legs[Math.floor(Math.random() * legs.length)] + "</p>")
            document.writeln("<p>Legs(Hamstrings): " + hamLegs[Math.floor(Math.random() * hamLegs.length)] + "</p>")
            document.writeln("<p>Legs(Quadricips): " + quadLegs[Math.floor(Math.random() * quadLegs.length)] + "</p>")
        }

        if(absClick.checked) {
            document.writeln("<h2>Ab Exercises:</h2>")
            document.writeln("<p>Abs: " + abs[Math.floor(Math.random() * abs.length)] + "</p>")
            document.writeln("<p>Abs: " + abs[Math.floor(Math.random() * abs.length)] + "</p>")
            document.writeln("<p>Abs: " + abs[Math.floor(Math.random() * abs.length)] + "</p>")
        }

        if(forearmsClick.checked) {
            document.writeln("<h2>Forearm Exercises:</h2>")
            document.writeln("<p>Forearms(top): " + topForearms[Math.floor(Math.random() * topForearms.length)] + "</p>")
            document.writeln("<p>Forearms(bottom): " + bottomForearms[Math.floor(Math.random() * bottomForearms.length)] + "</p>")
        }
})




