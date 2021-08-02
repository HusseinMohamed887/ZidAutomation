import { zidPayMerchantSuspend } from "../../../../../support/APIs/ZidPay/Merchant/MerchantSuspend";
import { zidPayLoginAPIs } from "../../../../../support/APIs/ZidPay/ZPLogin";
import { apis } from "../../../../../support/GeneralAPIs_Commands";

describe ('Manage ZidPay API Testing ',()=>{
    before (function()
    {
      
      
      zidPayLoginAPIs.ZidPayLogin()
        cy.get('@Zidpaytoken').as('zidpaytoken')
        cy.log(this.zidpaytoken)
    })

    it('Get ZidPay Merchant Suspend', function(){
       
        zidPayMerchantSuspend.GetZPMerchantSuspend(this.zidpaytoken,"952ca29f-c3df-4362-8e3a-c22fa8aea2cf")
      
      apis.Assert_APIResponseStatusCodeIsCorrect('@GetZPMerchantSuspend',200)
      //apis.Assert_ResponseBodyContainsValue('@GetZPMerchantD','referenceNumber','952ca29f-c3df-4362-8e3a-c22fa8aea2cf')
    })
})