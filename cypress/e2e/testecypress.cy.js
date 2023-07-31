/// <reference types="cypress"/>

const url = require ('../fixtures/url.json')
const login = require ('../fixtures/login.json')
describe('template spec', () => {
  
  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta')
    

  });

  afterEach(() => {
    cy.screenshot() 
  });
  it('passes', () => {
 
  cy.get('#username').type('login')
  cy.get('#password').type('senha')
  cy.get('.woocommerce-form > .button').click()

  cy.get('.page-title').should('contain','Minha conta')   

 
})
it.only('login Fixture ', () => {

 cy.fixture('login').then( dados => {
  cy.get('#username').type('perfil.usuario')
  cy.get('#password').type('perfil.senha')
  cy.get('.woocommerce-form > .button').click()

 })

 it.only('login Fixture ', () => {

  cy.fixture('login').then( dados => {
   cy.get('#username').type('perfil.usuario',{log: false})
   cy.get('#password').type('perfil.senha,{log: false}')
   cy.get('.woocommerce-form > .button').click()

  })

})
it('Validar mensagens',() => {
 
  cy.get('#username').type('michelcarvalho1414@gmail.com')
  cy.get('#password').type('grandeufc')
  cy.get('.woocommerce-form > .button').click()
  cy.get('.woocommerce-MyAccount-navigation-link--orders > a')
  .contains('Pedidos')

  
})
it('Validar teste negativo', () => {
 
  cy.get('#username').type('michelcarvalho1414@gmail.com')
  cy.get('#password').type('grandeufc')
  cy.get('.woocommerce-form > .button').click()

  cy.get('.woocommerce-MyAccount-content > :nth-child(2)')
  .contains('michel10') 


})
})

});