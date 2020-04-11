/// <reference types="Cypress" />

describe('Search test cases', function(){

    before(function(){
        cy.log("Executing preconditions before all test.");
    })

    after(function(){
        cy.log("Executing postconditions after all test.");
    })

    beforeEach(function(){
        cy.log("Executing preconditions before each test...")
        cy.visit('http://automationpractice.com/index.php');
    })

    afterEach(function(){
        cy.log("Executing postconditions after each test...")
    })

    it('Search with result', function(){       
        cy.get('#search_query_top').type('dress');
        cy.get('#searchbox > .btn').click();
        cy.get('.lighter').contains('"dress"');
    })

    it('Search with result', function(){       
        cy.get('#search_query_top').type('hat');
        cy.get('#searchbox > .btn').click();
        cy.get('.lighter').contains('"hat"');
    })
})