import { zidPayMerchantApprove } from "../../../../../support/APIs/ZidPay/Merchant/MerchantApprove";
import { zidPayLoginAPIs } from "../../../../../support/APIs/ZidPay/ZPLogin";
import { apis } from "../../../../../support/GeneralAPIs_Commands";

describe ('Manage ZidPay API Testing ',()=>{
    before (function()
    {
      
      
      zidPayLoginAPIs.ZidPayLogin()
        cy.get('@Zidpaytoken').as('zidpaytoken')
        cy.log(this.zidpaytoken)
    })

    it('Get ZidPay Merchant Approve', function(){
       
        zidPayMerchantApprove.GetZPMerchantApprove(this.zidpaytoken,"bdccd8b2-9c22-4fc4-b842-abe5e6617990")
      
      apis.Assert_APIResponseStatusCodeIsCorrect('@GetZPMerchantApprove',200)
      //apis.Assert_ResponseBodyContainsValue('@GetZPMerchantD','referenceNumber','952ca29f-c3df-4362-8e3a-c22fa8aea2cf')
    })
})