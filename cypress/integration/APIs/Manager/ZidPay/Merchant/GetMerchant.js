import { zidPayGetMerchant } from "../../../../../support/APIs/ZidPay/Merchant/GetMerchant";
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
       
        zidPayGetMerchant.GetZPMerchantDetails(this.zidpaytoken,"1059")
      
      apis.Assert_APIResponseStatusCodeIsCorrect('@GetZPMerchant',200)
      //apis.Assert_ResponseBodyContainsValue('@GetZPMerchant','items.referenceId','07a2f55f-592b-4f42-8770-d7af4600a93d')
      apis.Assert_ResponseBodyArrayContainsJsonObject_WithKeyAndValue('@GetZPMerchant','items','referenceId','07a2f55f-592b-4f42-8770-d7af4600a93d')
    })
})