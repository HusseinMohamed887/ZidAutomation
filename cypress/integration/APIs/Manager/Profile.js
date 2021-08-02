import { loginAPIs } from "../../../support/APIs/Managers/Login";
import { profileAPIs } from "../../../support/APIs/Managers/Profile";
import { apis } from "../../../support/GeneralAPIs_Commands";

describe('Profile APIs Testing', () => {

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

        it('Get User Profile', function()  {
           
            //Call the API
           profileAPIs.GetProfile(this.Token)
         
           //Assert its status code is 200
           apis.Assert_APIResponseStatusCodeIsCorrect('@GetProfile', 200)

           //Assert its response body has property 'user.mobile' and value '966500000115'
           apis.Assert_ResponseBodyContainsValue('@GetProfile', 'user.mobile', '966500000115')

        })


    })

