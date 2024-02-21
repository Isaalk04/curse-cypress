import { signupMethops } from "./signup.methops"

describe('template spec', () => {
  it('passes', () => {
    const username='george01'
    const password='george01'
    cy.visit('https://www.demoblaze.com/index.html')
    cy.wait(5000)
    cy.get('a[data-target="#signInModal"]').click()
    signupMethops.AutoSing(username,password)
  })
})
