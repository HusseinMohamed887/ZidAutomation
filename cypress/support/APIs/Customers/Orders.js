var URIs = require('../URIs')

class OrdersAPIs{

     GetOrders(Token, StoreId)
    {
       
        cy.request({
            method : 'get',
            url: URIs.URIs.Customer.Orders.StoreOrders,
            failOnStatusCode: Cypress.env('failOnStatusCode'),
            headers :{
                Authorization: Cypress.env('Authorization'),
                Accept: Cypress.env('Accept'),
                'Accept-Language' : Cypress.env('Accept-Language'),
                'User-Agent': Cypress.env('User-Agent'),
                'X-MANAGER-TOKEN': Token
                    }
              }).as('GetOrders')
            
    }
}

export const ordersAPIs = new OrdersAPIs()