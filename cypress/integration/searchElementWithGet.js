/// <reference types="Cypress" />

describe('Ways to find a element', function(){
    it('Search in the searcher', function(){
        cy.visit('http://automationpractice.com/index.php');
        cy.get('.search_query.form-control.ac_input').type('Hello with class'); //Search for class
        cy.get('#search_query_top').type(', after with Id'); //Search for id
        cy.get('[name="search_query"]').type(', now with name.') //Search for ame or other property
        cy.get('[placeholder="Search"]').clear().type('clear and I search to placeholder...');
    })
})