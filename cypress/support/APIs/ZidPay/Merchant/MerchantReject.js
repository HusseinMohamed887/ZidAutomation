class ZidPayMerchantReject{
   

    GetZPMerchantReject(Token,referenceId,rejectionReason)
   {
       cy.request({
           method: 'POST',
           url: "https://testing.zidpay.org//api/Merchant/Reject",
           body:
            {
                "referenceId": referenceId,
                "rejectionReason": rejectionReason,
                "comment": "string"
              },
           headers: {
               Accept: Cypress.env('Accept'),
               Authorization: Token,
               'Accept-Language': Cypress.env('Accept-Language'),
               'User-Agent': Cypress.env('User-Agent'),
               
           }
       }).as('GetZPMerchantReject')
   }

}
export const zidPayMerchantReject = new ZidPayMerchantReject()
