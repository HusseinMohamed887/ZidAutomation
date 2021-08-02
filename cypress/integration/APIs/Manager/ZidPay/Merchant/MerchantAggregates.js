import { zidPayMerchantAggregates } from "../../../../../support/APIs/ZidPay/Merchant/MerchantAggregates";
import { zidPayLoginAPIs } from "../../../../../support/APIs/ZidPay/ZPLogin";
import { apis } from "../../../../../support/GeneralAPIs_Commands";

describe ('Manage ZidPay API Testing ',()=>{
    before (function()
    {
      
      
      zidPayLoginAPIs.ZidPayLogin()
        cy.get('@Zidpaytoken').as('zidpaytoken')
        cy.log(this.zidpaytoken)
    })

    it('Get ZidPay Merchant Aggregates', function(){
       
        zidPayMerchantAggregates.GetZPMerchantAggregates(this.zidpaytoken,"952ca29f-c3df-4362-8e3a-c22fa8aea2cf")
      
      apis.Assert_APIResponseStatusCodeIsCorrect('@GetZPMerchantAggregates',200)
      apis.Assert_ResponseBodyContainsValue('@GetZPMerchantAggregates','referenceNumber','952ca29f-c3df-4362-8e3a-c22fa8aea2cf')
    })
})