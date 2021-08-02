import { loginAPIs } from "../../../support/APIs/Managers/Login";
import { apis } from "../../../support/GeneralAPIs_Commands";
import { storeCustomersAPIs } from "../../../support/APIs/Managers/StoreCustomers";

describe('Manager Store APIs Testing', () => {

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
        it('Get Store Customers', function()  {
           
             const customerToVerify = {
                city: null,
                email: "s.assalous@zid.sa",
                id: 179647,
                mobile: "966500000005",
                name: "testing",
                nickname: "testing",
                order_counts: 0,
                pivotEmail: "testing@testing.com",
                pivotMobile: "966500000005",
                verified: 1
            }

            //Call the API
           storeCustomersAPIs.GetStoreCustomers(this.Token)
         
           //Assert its status code is 200
           apis.Assert_APIResponseStatusCodeIsCorrect('@GetStoreCustomers', 200)

          //Assert the response body has List property 'customers' and it has json with all it's correct values depending on its id with value 179647
           apis.VerifyResponseBodyJsonBySpecificKey('@GetStoreCustomers', 'customers', customerToVerify, 'id', 179647)

        })

    })

