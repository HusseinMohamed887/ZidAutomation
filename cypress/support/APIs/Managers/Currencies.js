var URIs = require('../URIs')

class CurrenciesAPIs{

     GetAvailableCurrencies(Token)
    {
        cy.request({
            method: 'GET',
            url: URIs.URIs.Managers.StoreCurrencies.GetAvailableCurrencies,
            headers: {
                Accept: Cypress.env('Accept'),
                Authorization: Cypress.env('Authorization'),
                'Accept-Language': Cypress.env('Accept-Language'),
                'User-Agent': Cypress.env('User-Agent'),
                'X-MANAGER-TOKEN': Token
            }
        }).as('GetAvailableCurrencies')
    }

    SetStoreDefaultCurrency(Token, Currency)
    {
        cy.request({
            method: 'Post',
            url: URIs.URIs.Managers.StoreCurrencies.SetStoreDefaultCurrency,
            body: {
                currency: Currency
            },
            headers: {
                Accept: Cypress.env('Accept'),
                Authorization: Cypress.env('Authorization'),
                'Accept-Language': Cypress.env('Accept-Language'),
                'User-Agent': Cypress.env('User-Agent'),
                'X-MANAGER-TOKEN': Token
            }
        }).as('SetStoreDefaultCurrency')
    }
} 

export const currenciesAPIs = new CurrenciesAPIs()