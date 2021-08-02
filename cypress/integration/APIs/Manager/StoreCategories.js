import { loginAPIs } from "../../../support/APIs/Managers/Login";
import { storeCategoriesAPIs } from "../../../support/APIs/Managers/StoreCategories";
import { apis } from "../../../support/GeneralAPIs_Commands";

describe('Manager Store Categories APIs Testing', () => {

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
        it('Get Store Categories', function()  {
           
            
            const categoryDetails = {
                id: 67111,
                name: "حقائب",
                slug: "حقائب",
                SEO_category_title: "حقائب",
                SEO_category_description: "",
                names: {ar: "حقائب"},
                description: null,
                url: "https://staging-catalog.zid.sa/"+Cypress.env('UserName')+"/categories/حقائب",
                image: null,
                img_alt_text: null,
                products_count: 3,
                sub_categories: [],
                parent_id: null,
                flat_name: "حقائب",
                is_published: true
            }

            //Call the API
           storeCategoriesAPIs.GetStoreCategories(this.Token)
         
           //Assert its status code is 200
           apis.Assert_APIResponseStatusCodeIsCorrect('@GetStoreCategories', 200)

          //Assert the response body has List property 'categories' and it has json with all it's correct values depending on its flat_name with value حقائب
           apis.VerifyResponseBodyJsonBySpecificKey('@GetStoreCategories', 'categories', categoryDetails, 'flat_name', "حقائب")

        })

    })

