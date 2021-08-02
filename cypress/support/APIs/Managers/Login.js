//var URIs = require('../URIs')

class LoginAPIs{

     Login(UserName, Password)
    {
        cy.request({
            method: 'POST',
            url: URIs.URIs.Managers.Account.Login,
            body: {
                email: UserName,
                password: Password
            },
            headers: {
                Accept: Cypress.env('Accept'),
                Authorization: Cypress.env('Authorization'),
                'Accept-Language': Cypress.env('Accept-Language'),
                'User-Agent': Cypress.env('User-Agent')
            }
        }).then((response) => {
            const Token = response.body.user.access_token
            cy.wrap(Token).as('token')
        })
    } 


    VerifyEmail(Token, Email)
    {
       
        cy.request({
            method : 'Post',
            url: URIs.URIs.Managers.Account.ValidateUserEmail,
            failOnStatusCode: Cypress.env('failOnStatusCode'),
            body:{
                email: Email
            },
            headers :{
                Authorization: Cypress.env('Authorization'),
                Accept: Cypress.env('Accept'),
                'Accept-Language' : Cypress.env('Accept-Language'),
                'User-Agent': Cypress.env('User-Agent'),
                'X-MANAGER-TOKEN': Token
                    }
              }).as('VerifyEmail')
            
    }
}

export const loginAPIs = new LoginAPIs()