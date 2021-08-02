import { zidPayMerchantReject } from "../../../../../support/APIs/ZidPay/Merchant/MerchantReject";
import { zidPayLoginAPIs } from "../../../../../support/APIs/ZidPay/ZPLogin";
import { apis } from "../../../../../support/GeneralAPIs_Commands";

describe ('Manage ZidPay API Testing ',()=>{
    before (function()
    {
      
      
      zidPayLoginAPIs.ZidPayLogin()
        cy.get('@Zidpaytoken').as('zidpaytoken')
        cy.log(this.zidpaytoken)
    })

    it('Get ZidPay Merchant Reject', function(){
       
        zidPayMerchantReject.GetZPMerchantReject(this.zidpaytoken,"ea422e31-1d6f-4df1-ba66-e4683b7589b6",'2')
      
      apis.Assert_APIResponseStatusCodeIsCorrect('@GetZPMerchantReject',200)
      //apis.Assert_ResponseBodyContainsValue('@GetZPMerchantD','referenceNumber','952ca29f-c3df-4362-8e3a-c22fa8aea2cf')
    })
})