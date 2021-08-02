import { loginAPIs } from "../../../support/APIs/Managers/Login";
import { productsAPIs } from "../../../support/APIs/Managers/TopProducts";
import { apis } from "../../../support/GeneralAPIs_Commands";

describe('Manager Products APIs Testing', () => {

    before(function()
    {

        //Login and generate Token
        loginAPIs.Login(Cypress.env('email'), Cypress.env('password'))
      
        //Save the token into Token Alias to use it in a simple way 'this.Token' in the fixture tests
        cy.get('@token').as('Token')
    })


    it.only('Get Top Products', function()  {

        const x = {
            "id": "7aabbd794b9b46b89c07253701fcc2c1",
            "name": "هيدفون",
            "totalAmount": "35"
        }

        productsAPIs.GetTopProducts(this.Token, "2019-01-01 00:00:01", "2020-03-22 23:59:59", 3)

        apis.Assert_APIResponseStatusCodeIsCorrect('@GetTopProducts', 200)

        apis.Assert_ResponseBodyArrayContainsJsonObject_WithKeyAndValue('@GetTopProducts', 'payload.products', 'name', "هيدفون")

        apis.Assert_ResponseBodyArrayContainsJsonObject('@GetTopProducts', 'payload.products', x)

        apis.Assert_ResponseBodyContainsValue('@GetTopProducts', 'message.name', null)

        apis.Assert_ResponseBodyArrayLengthIsCorrect('@GetTopProducts', 'payload.products', 3)

    })

})


