/// <reference types="cypress" />

const { type } = require("mocha/lib/utils");

describe('Funcionalidade pre cadastro', () => {
 
beforeEach(() => {
  
    cy.visit('minha-conta/')
});


it('Realizar um Pre cadastro', () =>{
    cy.get('#reg_email').type('michelcarvalho1414@gmail.com')
    cy.get('#reg_email');type('grandeufc')
    cy.get(':nth-child(4) > .button').click() 

     
})
 
 it('Realizar o login cadastrado ', () => {


    
 })

}); 