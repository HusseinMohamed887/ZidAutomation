import { zidPayCreateMerchant } from "../../../../../support/APIs/ZidPay/Merchant/CreateMerchant";
import { zidPayLoginAPIs } from "../../../../../support/APIs/ZidPay/ZPLogin";
import { apis } from "../../../../../support/GeneralAPIs_Commands";

describe ('Manage ZidPay API Testing ',()=>{
    before (function()
    {
      
      
      zidPayLoginAPIs.ZidPayLogin()
        cy.get('@Zidpaytoken').as('zidpaytoken')
        cy.log(this.zidpaytoken)
    })

    it('ZidPay Create Merchant History', function(){
      
      //const filepath = 'Images/Screenshot (224)'
      //const file=  cy.get('input[type="file"]').attachFile(filepath)
      zidPayCreateMerchant.MerchantCreateRequest(this.zidpaytoken)
 
      
      apis.Assert_APIResponseStatusCodeIsCorrect('@MerchantCreateRequest',200)
      //apis.Assert_ResponseBodyContainsValue('@GetZPMerchantHistory','referenceNumber','952ca29f-c3df-4362-8e3a-c22fa8aea2cf')
    })
})