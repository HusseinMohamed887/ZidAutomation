class ZidPayMerchantDeactivate{
   

    GetZPMerchantDeactivate(Token,referenceId)
   {
       cy.request({
           method: 'POST',
           url: "https://testing.zidpay.org//api/Merchant/Deactivate",
           body:
            {
                "referenceId": referenceId
              },
           headers: {
               Accept: Cypress.env('Accept'),
               Authorization: Token,
               'Accept-Language': Cypress.env('Accept-Language'),
               'User-Agent': Cypress.env('User-Agent'),
               
           }
       }).as('GetZPMerchantDeactivate')
   }

}
export const zidPayMerchantDeactivate = new ZidPayMerchantDeactivate()
