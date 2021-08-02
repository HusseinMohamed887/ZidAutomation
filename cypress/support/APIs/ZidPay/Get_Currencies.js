var URIs = require('../URIs')

class ZidPayCurrenciesAPIs{
   

     GetZPCurrencies(Token)
    {
        cy.request({
            method: 'GET',
            url: 'https://testing.zidpay.org/api/Currency' ,
            headers: {
                Accept: Cypress.env('Accept'),
                Authorization: Token,
                'Accept-Language': Cypress.env('Accept-Language'),
                'User-Agent': Cypress.env('User-Agent'),
                
            }
        }).as('GetZPCurrencies')
    }

}


export const zidPayCurrenciesAPIs = new ZidPayCurrenciesAPIs()
