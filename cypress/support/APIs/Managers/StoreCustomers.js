var URIs = require('../URIs')

class StoreCustomersAPIs{

     GetStoreCustomers(Token)
    {
        cy.request({
            method: 'GET',
            url: URIs.URIs.Managers.StoreCustomer.GetStoreCustomers,
            headers: {
                Accept: Cypress.env('Accept'),
                Authorization: Cypress.env('Authorization'),
                'Accept-Language': Cypress.env('Accept-Language'),
                'User-Agent': Cypress.env('User-Agent'),
                'X-MANAGER-TOKEN': Token
            }
        }).as('GetStoreCustomers')
    }
} 

export const storeCustomersAPIs = new StoreCustomersAPIs()