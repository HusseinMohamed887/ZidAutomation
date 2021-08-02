// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
 //Cypress.Commands.add("login", () => { })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import 'cypress-file-upload';

let identity
Cypress.Commands.add('postToken', () => {
    cy.request({
        method: 'POST',
        url: Cypress.env('https://testing.zidpay.org/connect/token'), //get from cypress.env.json
        form: true, //sets to application/x-www-form-urlencoded
        header: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'x-site-code': pm.environment.get("x-site-code")
        },
        body: {
              mode: 'urlencoded',
              urlencoded: [
              { key: 'client_id', value: 'zid-core' },
              { key: 'client_secret',value: 'secret' } ,
              { key: 'scope', value: 'read write' },
              { key: 'grant_type', value: 'client_credentials' }
          ]
        }
    })
        .its('body')
        .then((response) => {
            identity = response
            window.localStorage.setItem('identity', JSON.stringify(identity))
            cy.log(identity.access_token)
        })
})