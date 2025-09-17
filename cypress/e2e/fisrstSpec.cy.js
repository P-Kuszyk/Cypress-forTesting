const linkToWebsite = "/Website/index.html";

describe('#1 Open the website', () => {
  it('Check the websie', () => {
    cy.visit('/Website/index.html')
  })
})

describe("#2 Title of the website", () => {
it('Check the title of the site', () => {
  cy.visit(linkToWebsite) 
  cy.title().should('include', 'Testing')
})
it('Check if the title of the site is wrong', () =>{
  cy.visit(linkToWebsite)
  cy.title().should('not.include', 'Developer')
})
})

describe('#3 Buttons', () => {
  it('Check buttons', () => {
    cy.visit(linkToWebsite)
    //cy.viewport(1920, 1080) // Ustawienie odpowiedniej rozdzielczości | ZMIANA W CYPRESS.CONFIG.JS 
    cy.get('.button.is-primary').click()
    cy.url().should('include', '/Website/register.html')
  })
})

describe('#4 Visit register page', ()=> {
  it('Back to Home Page', () => {
    cy.visit('/Website/register.html')
    cy.get('#SG').click() // Wyszukiwanie elementu po ID 
    cy.url().should('include', linkToWebsite)
  })
})

describe('#5 Textarea', () => {
  it('Check if the textarea is empty', () => {
    cy.visit(linkToWebsite)
    cy.get('.textA').should('be.empty')
  }),
  it('Put something into textarea and clean after it', () => {
    cy.visit(linkToWebsite)
    cy.get('.textA').type("Random text")
    cy.get('.textA').invoke('val').should('include', 'Random')
    cy.get('.btnDelete').click()
    cy.get('.textA').should('be.empty')
  })
})