
class ZidPayLoginAPIs
{
    ZidPayLogin()
{ cy.request({
          method: 'POST',
          url: 'https://testing.zidpay.org/connect/token',
          form:true ,
          body: {
            
           "client_id" : 'zid-core' ,
            "client_secret" : 'secret' ,
            "scope" : 'read write' ,
            "grant_type" : 'client_credentials'
          
      },
          header: {
              'Accept': '*/*',
              'Content-Type': 'application/x-www-form-urlencoded',
              'Accept-Language': Cypress.env('Accept-Language'),
                'User-Agent': Cypress.env('User-Agent'),
                'Connection': 'keep-alive',
                'Accept-Encoding': 'gzip, deflate, br',
                'Cookie': '__cfduid=dd700fd9365621fba8a8a6b78760344901620096744'
              
          }
  
        })
    .then((response) => {
        const Zidpaytokenn = "bearer "+ response.body.access_token
        cy.wrap(Zidpaytokenn).as('Zidpaytoken')
    })
    
  }
}


export const zidPayLoginAPIs = new ZidPayLoginAPIs() 
