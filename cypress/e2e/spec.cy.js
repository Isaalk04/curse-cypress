import { loginmethods } from "./pages/login/login.methods"

describe('template spec', () => {
  it('passes', () => {
    const name='random01'
    const word='random01'
    cy.visit('https://www.demoblaze.com/index.html')
    cy.wait(5000)
    cy.get('a[data-target="#logInModal"]').click()
    loginmethods.login(name,word)
    cy.wait(3000)
    cy.get('a#nameofuser').should('exist')
  })
})