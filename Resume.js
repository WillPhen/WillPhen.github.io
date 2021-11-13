function toHTML(school, schoolWebsite, degree, startDate, endDate, courses, gradePoints, creditHours){
    this.school = school
    this.schoolWebsite = schoolWebsite
    this.degree = degree
    this.startDate = startDate
    this.endDate = endDate
    this.courses = courses
    this.gradePoints = gradePoints
    this.creditHours = creditHours

this.printEducation = function() {
    document.write("<p>")
    document.write("<ul>")
    document.write("<li>Educational Institution: " + this.school + "</li>")
    document.write("<li>School Website: <a href=" + this.schoolWebsite + "> " + this.school +" </a> </li>")
    document.write("<li>Degree: " + this.degree + "</li>")
    document.write("<li>Start Date: " + this.startDate + "</li>")
    document.write("<li>End Date: " + this.endDate + "</li>")
    document.write("<li>Key Courses: " + this.courses + "</li>")
    this.getGPA();
    document.write("</ul>")
    document.write("</p>")
}

this.getGPA = function() {
    document.write("<li>GPA: " + (this.gradePoints/this.creditHours).toFixed(1) + "</li>")
}

}

myEducation = new toHTML("Oklahoma Baptist University", "https://www.okbu.edu", "Computer Information Systems", "August 2018", "May 2022", ["Data Structures", " Web Development", " Systems Analysis", " Networking Security", " Software Development 1&2"], "50", "15")
myEducation.printEducation()