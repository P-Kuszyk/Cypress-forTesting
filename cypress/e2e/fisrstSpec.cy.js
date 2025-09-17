const linkToWebsite = "/Website/index.html";

describe('#1 Attempt', () => {
  it('Check the websie', () => {
    cy.visit('/Website/index.html')
  })
})

describe("#2 Attempt", () => {
it('Check the title of the site', () => {
  cy.visit(linkToWebsite) 
  cy.title().should('include', 'Testing')
})
it('Check if the title of the site is wrong', () =>{
  cy.visit(linkToWebsite)
  cy.title().should('not.include', 'Developer')
})
})

describe('#3 Attempt', () => {
  it('Check buttons', () => {
    cy.visit(linkToWebsite)
    //cy.viewport(1920, 1080) // Ustawienie odpowiedniej rozdzielczości | ZMIANA W CYPRESS.CONFIG.JS 
    cy.get('.button.is-primary').click()
    cy.url().should('include', '/Website/register.html')
  })
})

describe('#4 Attempt', ()=> {
  it('Back to Home Page', () => {
    cy.visit('/Website/register.html')
    cy.get('#SG').click() // Wyszukiwanie elementu po ID 
    cy.url().should('include', linkToWebsite)
  })
})