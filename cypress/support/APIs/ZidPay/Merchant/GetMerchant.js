class ZidPayGetMerchant{
   

    GetZPMerchantDetails(Token,ExternalId)
   {
       cy.request({
           method: 'GET',
           url: "https://testing.zidpay.org/api/Merchant",
           qs:{
            externalId:ExternalId
           },
           headers: {
               Accept: Cypress.env('Accept'),
               Authorization: Token,
               'Accept-Language': Cypress.env('Accept-Language'),
               'User-Agent': Cypress.env('User-Agent'),
               
           }
       }).as('GetZPMerchant')
   }

}
export const zidPayGetMerchant = new ZidPayGetMerchant()
