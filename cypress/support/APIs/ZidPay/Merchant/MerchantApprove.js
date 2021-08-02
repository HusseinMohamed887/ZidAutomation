class ZidPayMerchantApprove{
   

    GetZPMerchantApprove(Token,referenceId)
   {
       cy.request({
           method: 'POST',
           url: "https://testing.zidpay.org//api/Merchant/Approve",
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
       }).as('GetZPMerchantApprove')
   }

}
export const zidPayMerchantApprove = new ZidPayMerchantApprove()
