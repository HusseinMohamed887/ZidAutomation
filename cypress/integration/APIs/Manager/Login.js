import { loginAPIs } from "../../../support/APIs/Managers/Login";
import { apis } from "../../../support/GeneralAPIs_Commands";

describe('Login APIs Testing', () => {

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

    })

