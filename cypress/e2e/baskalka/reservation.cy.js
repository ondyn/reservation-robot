/// <reference types="cypress" />

describe('reserve', () => {

    it('do the reservation', () => {

        const username = Cypress.env('username')
        const password = Cypress.env('password')
      
        expect(username, 'username was set').to.be.a('string').and.not.be.empty
        expect(password, 'password was set').to.be.a('string').and.not.be.empty

        cy.visit('http://baskalka.e-rezervace.cz/Branch/pages/Schedule.faces')

        cy.get('[id=username]').type(username)
        cy.get('[id=password]').type(`${password}{enter}`)

        //cy.get('[class=credit-amount]').
    })
})

