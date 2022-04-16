function Footer(course, term, univ, site) {
    this.course = course;
    this.term = term;
    this.university = univ;
    this.website = site;

    this.writeFooter = function() {
        document.write("<hr>")
        document.write("<center>")
        document.write("<footer>")
        document.write("<p>This page was created for CIS-Insiders. Interested in OBU? <a href=\"" + this.website + "\" target=\"_blank\">Click Here</a></p>")
        document.write("page last modified: " + document.lastModified + "</p>")
        document.write("</footer>")
        document.write("</center>")
    }
}
newFooter = new Footer("CIS-2803", "Spring 2022", "Oklahoma Baptist University", "http://www.okbu.edu")
newFooter.writeFooter()