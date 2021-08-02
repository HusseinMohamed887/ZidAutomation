var URIs = require('../URIs')

class ProfileAPIs{

     GetProfile(Token)
    {
       
        cy.request({
            method : 'get',
            url: URIs.URIs.Managers.Account.Profile,
            failOnStatusCode: Cypress.env('failOnStatusCode'),
            headers :{
                Authorization: Cypress.env('Authorization'),
                Accept: Cypress.env('Accept'),
                'Accept-Language' : Cypress.env('Accept-Language'),
                'User-Agent': Cypress.env('User-Agent'),
                'X-MANAGER-TOKEN': Token
                    }
              }).as('GetProfile')
            
    }
}

export const profileAPIs = new ProfileAPIs()