import { loginAPIs } from "../../../support/APIs/Managers/Login";
import { apis } from "../../../support/GeneralAPIs_Commands";
import { storeCustomersAPIs } from "../../../support/APIs/Managers/StoreCustomers";
import { currenciesAPIs } from "../../../support/APIs/Managers/Currencies";

describe('Manager Currencies APIs Testing', () => {

    before(function()
    {

        //Login and generate Token
        loginAPIs.Login(Cypress.env('email'), Cypress.env('password'))
      
        //Save the token into Token Alias to use it in a simple way 'this.Token' in the fixture tests
        cy.get('@token').as('Token')
    })

    beforeEach(function()
    {

    })
        it('Get All Available Currencies', function()  {
           
            const currencyToVerify = {
                id: 2,
                name: "US Dollar",
                code: "USD",
                symbol: "$",
                country: {id: 223, name: "الولايات المتحدة", code: "US", country_code: "USA", flag: "https://zid-platform.s3.eu-west-1.amazonaws.com/static/us.svg"}
               
            }

            //Call the API
           currenciesAPIs.GetAvailableCurrencies(this.Token)
         
           //Assert its status code is 200
           apis.Assert_APIResponseStatusCodeIsCorrect('@GetAvailableCurrencies', 200)

          //Assert the response body has List property 'currencies' and it has json with all it's correct values depending on its name with value US Dollar
           apis.VerifyResponseBodyJsonBySpecificKey('@GetAvailableCurrencies', 'currencies', currencyToVerify, 'name', 'US Dollar')

        })


        it('Set Store Default Currency', function()  {
           
            
            //Call the API
           currenciesAPIs.SetStoreDefaultCurrency(this.Token, 'SAR')
         
           //Assert its status code is 200
           apis.Assert_APIResponseStatusCodeIsCorrect('@SetStoreDefaultCurrency', 200)

          //Assert the response has code SAR
           apis.Assert_ResponseBodyContainsValue('@SetStoreDefaultCurrency', 'currency.code', 'SAR')

        })

    })

