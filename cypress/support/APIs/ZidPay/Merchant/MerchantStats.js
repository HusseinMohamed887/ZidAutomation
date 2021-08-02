class ZidPayMerchantStats{
   

    GetZPMerchantStats(Token,referenceId)
   {
       cy.request({
           method: 'GET',
           url: "https://testing.zidpay.org/api/Merchant/"+referenceId+"/Details",
           headers: {
               Accept: Cypress.env('Accept'),
               Authorization: Token,
               'Accept-Language': Cypress.env('Accept-Language'),
               'User-Agent': Cypress.env('User-Agent'),
               
           }
       }).as('GetZPMerchantStats')
   }

}
export const zidPayMerchantStats = new ZidPayMerchantStats()
