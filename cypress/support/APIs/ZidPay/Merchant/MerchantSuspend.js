class ZidPayMerchantSuspend{
   

    GetZPMerchantSuspend(Token,referenceId)
   {
       cy.request({
           method: 'POST',
           url: "https://testing.zidpay.org//api/Merchant/Suspend",
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
       }).as('GetZPMerchantSuspend')
   }

}
export const zidPayMerchantSuspend = new ZidPayMerchantSuspend()
