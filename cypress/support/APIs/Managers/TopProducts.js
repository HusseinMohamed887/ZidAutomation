var URIs = require('../URIs')

class ProductsAPIs{

     GetTopProducts(Token, StartDate, EndDate, Limit)
    {
        cy.request({
            method: 'GET',
            url: "/managers/store/reports/top-products?",
            qs: {
                start_date: StartDate,
                end_date: EndDate,
                sort: "top",
                limit: Limit
            },
            headers: {
                Accept: Cypress.env('Accept'),
                Authorization: Cypress.env('Authorization'),
                'Accept-Language': Cypress.env('Accept-Language'),
                'User-Agent': Cypress.env('User-Agent'),
                'X-MANAGER-TOKEN': Token
            }
        }).as('GetTopProducts')
    }
} 

export const productsAPIs = new ProductsAPIs()