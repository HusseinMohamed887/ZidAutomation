var elements = require('./LoginElements')

class Login{

     Login(UserName, Password)
    {
        cy.get(elements.HOMEPAGE.Email_TextBox).type(UserName)
        cy.get(elements.HOMEPAGE.Password_TextBox).type(Password)
        cy.get(elements.HOMEPAGE.Login_Button).click()
    } 

}

export const login = new Login()