/// <reference types="cypress" />

describe('Funcionalidade Produtos', () => {

    beforeEach(() => {
        cy.visit('minha conta') 
 
    });



    it('Validar funcção de Produto', () => {
        cy.get('#username').type('michelcarvalho1414@gmail.com')
        cy.get('#password').type('grandeufc')
        cy.get('.woocommerce-form > .button').click()
    })
    it('Validar funcção de Produto', () => {
        cy.get('#primary-menu > .menu-item-629 > a').click()
     cy.get('[class="product-block grid"]') .first().click()
     cy.get('[class="product-block grid"]') .last().click()
     cy.get('[class="product-block grid"]') .eq(3).click()
    
    })
    });