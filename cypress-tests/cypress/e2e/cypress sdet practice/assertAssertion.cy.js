/// <reference types = "cypress"/>

describe('Validating complex data using assert', function(){

    it('using assert on data', function(){
        // cy.visit('')

        //Asserting Strings
        let firstName = "Sanidhya";
        assert.equal(firstName,'Sanidhya');
        assert.include(firstName,'Sani');

        //Asserting Objects
        let person = {
            name:"Sanidhya",
            role:"QA"
        }

        assert.isObject(person);
        assert.deepEqual(person,{
            name:"Sanidhya",
            role:"QA"
        });

        assert.property(person,'role');
        assert.deepPropertyVal(person,'role','QA');


        //Asserting arrays
        let empId = [1,2,3,4,5]
        assert.isArray(empId);
        assert.includeMembers(empId,[2,4]);
        assert.includeDeepOrderedMembers(empId,[1,2,3,4,5]);
        assert.typeOf(empId,'Array');
    })
})