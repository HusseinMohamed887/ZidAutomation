class ZidPayCreateMerchant{
    MerchantCreateRequest(Token)
    
        {
            cy.request({
                method: 'POST',
                url: 'https://testing.zidpay.org/api/Merchant',
                // failOnStatusCode: false,
                body: 
                {
                    'OwnerFullName' : 'stringName',
                    "OrganizationName" : 'stringOrg',
                    "EmailAddress": "string@265.com",
                    "MobileNumber": "01514515",
                    "StoreCategoryId": 2,
                    "StoreLink": "string.com",
                    "ExpectedTransactionsPerMonth": 10,
                    "ExpectedTransactionsVolumePerMonth": 20,
                    "IdNumber": "123456",
                    "CrNumber": "123456",
                    "VatNumber": "123456",
                    "AccountType": 1,
                    "ExternalId": "8989",
                    "CountryCode": "100",
                    "Address.City": "string",
                    "Address.District": "string",
                    "Address.Street": "string",
                    "PackageId": 1,
                    "Bank.BankIban": "SA0380000000608010167519",
                    "Bank.BankId": 2,
                    "Bank.BankAccount": "string",
                    "Bank.BankAccountHolderName": "string",
                  
                    // "Attachments": [
                    //   {
                    //     "file": file,
                    //     "type": 1
                        
                    //   },
                    //   {
                    //     "file": file,
                    //     "type": 2
                    //   }
                    // ]
                  },
                headers: {
                    Accept: Cypress.env('*/*'),
                    Authorization: Token,
                    'Accept-Language': Cypress.env('Accept-Language'),
                    'User-Agent': Cypress.env('User-Agent'),
                     'Content-Type': 'form-data',
                    'Accept': '*/*',
                'Connection': 'keep-alive',
                'Accept-Encoding': 'gzip, deflate, br',
                'Cookie': '__cfduid=dd700fd9365621fba8a8a6b78760344901620096744'
                },
                
            }
                    
    ).as('MerchantCreateRequest')
    
                }
            }

        
        export const zidPayCreateMerchant = new ZidPayCreateMerchant()

