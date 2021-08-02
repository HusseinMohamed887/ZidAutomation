import { zidPayCurrenciesAPIs }from"../../../../support/APIs/ZidPay/Get_Currencies";
import { zidPayLoginAPIs } from "../../../../support/APIs/ZidPay/ZPLogin";
import { apis } from"../../../../support/GeneralAPIs_Commands";

describe ('Manage ZidPay API Testing ',()=>{
    before (function()
    {
      
      zidPayLoginAPIs.ZidPayLogin()
        cy.get('@Zidpaytoken').as('zidpaytoken')
        cy.log(this.zidpaytoken)
    })

    it('Get ZidPay Available Currencies', function(){
       cy.log(this.zidpayToken)
        zidPayCurrenciesAPIs.GetZPCurrencies(this.zidpaytoken)
      
      apis.Assert_APIResponseStatusCodeIsCorrect('@GetZPCurrencies',200)
    })
})