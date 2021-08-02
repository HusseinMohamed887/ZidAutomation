class ZidPayMerchantAggregates{
   

    GetZPMerchantAggregates(Token,referenceId)
   {
       cy.request({
           method: 'GET',
           url: "https://testing.zidpay.org/api/Merchant/"+referenceId+"/Aggregates",
           headers: {
               Accept: Cypress.env('Accept'),
               Authorization: Token,
               'Accept-Language': Cypress.env('Accept-Language'),
               'User-Agent': Cypress.env('User-Agent'),
               
           }
       }).as('GetZPMerchantAggregates')
   }

}
export const zidPayMerchantAggregates = new  ZidPayMerchantAggregates()
