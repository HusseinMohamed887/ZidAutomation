var elements = require('./HomeElements')

class Home{

     AccessCoursesList()
    {
        cy.get(elements.HOMEPAGE.CoursesList_Button).click()
    } 

}

export const home = new Home()