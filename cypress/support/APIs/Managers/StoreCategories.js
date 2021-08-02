var URIs = require('../URIs')

class StoreCategoriesAPIs{

     GetStoreCategories(Token)
    {
        cy.request({
            method: 'GET',
            url: URIs.URIs.Managers.StoreCategries.GetStoreCategoriesList,
            headers: {
                Accept: Cypress.env('Accept'),
                Authorization: Cypress.env('Authorization'),
                'Accept-Language': Cypress.env('Accept-Language'),
                'User-Agent': Cypress.env('User-Agent'),
                'X-MANAGER-TOKEN': Token
            }
        }).as('GetStoreCategories')
    }
} 

export const storeCategoriesAPIs = new StoreCategoriesAPIs()