import { zidPayMerchantDetails } from "../../../../../support/APIs/ZidPay/Merchant/MerchantDetails";
import { zidPayLoginAPIs } from "../../../../../support/APIs/ZidPay/ZPLogin";
import { apis } from "../../../../../support/GeneralAPIs_Commands";

describe ('Manage ZidPay API Testing ',()=>{
    before (function()
    {
      
      
      zidPayLoginAPIs.ZidPayLogin()
        cy.get('@Zidpaytoken').as('zidpaytoken')
        cy.log(this.zidpaytoken)
    })

    it('Get ZidPay Merchant Details', function(){
       
        zidPayMerchantDetails.GetZPMerchantDetails(this.zidpaytoken,"952ca29f-c3df-4362-8e3a-c22fa8aea2cf")
      
      apis.Assert_APIResponseStatusCodeIsCorrect('@GetZPMerchantDetails',200)
      apis.Assert_ResponseBodyContainsValue('@GetZPMerchantDetails','referenceNumber','952ca29f-c3df-4362-8e3a-c22fa8aea2cf')
    })
})