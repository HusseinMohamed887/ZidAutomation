
class APIs{

     //This is To Assert Response Status Code Is Correct
   Assert_APIResponseStatusCodeIsCorrect(APIAlias, ExpectedStatusCode)
    {
            cy.get(APIAlias).should((response)=> {
                expect(response.status).to.eq(ExpectedStatusCode);
        }) 
    }

  //This is To Assert Response Body Contains Key With Correct Value
   Assert_ResponseBodyContainsValue(APIAlias, Property, value)
    {
        cy.get(APIAlias).should((response)=> {
        expect(response.body).to.have.nested.property(Property, value);
        })
    }

    //Assert Response Body Has Array Contains Json Object
    Assert_ResponseBodyArrayContainsJsonObject(APIAlias, PropertyArray, Json)
    {
        cy.get(APIAlias).should((response)=> {

            var parts = PropertyArray.split('.');
           
            let resBodyFullProp = response.body
           
            for (let value of parts) {
                resBodyFullProp = resBodyFullProp[value];
            } 

        expect(resBodyFullProp).to.deep.include(Json);
        })
    }

    //Assert Response Body Has Array Contains Json Object With Specific Key And Value
    Assert_ResponseBodyArrayContainsJsonObject_WithKeyAndValue(APIAlias, PropertyArray, Key, Value)
    {
        cy.get(APIAlias).then((response)=> {

            var parts = PropertyArray.split('.');
           
            let resBodyFullTree = response.body
           
            for (let value of parts) {
                resBodyFullTree = resBodyFullTree[value];
            } 

            expect(resBodyFullTree.map(x => x[Key])).to.include(Value)

            })
    }

    //Assert Response Body Array Length Is Correct
    Assert_ResponseBodyArrayLengthIsCorrect(APIAlias, PropertyArray, Length)
    {
        cy.get(APIAlias).then((response)=> {

            var parts = PropertyArray.split('.');
           
            let resBodyFullTree = response.body
           
            for (let value of parts) {
                resBodyFullTree = resBodyFullTree[value];
            } 

            expect(resBodyFullTree.length).to.equal(Length)

            })
    }


}

export const apis = new APIs()