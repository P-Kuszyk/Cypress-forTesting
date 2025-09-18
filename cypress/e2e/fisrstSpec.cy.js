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
  it('Check button register', () => {
    cy.visit(linkToWebsite)
    //cy.viewport(1920, 1080) // Ustawienie odpowiedniej rozdzielczości | ZMIANA W CYPRESS.CONFIG.JS 
    cy.get('.button.is-primary').click()
    cy.url().should('include', '/Website/register.html')
  })
  it('Check button log in', () => {
    cy.visit(linkToWebsite)
    cy.get('.button.is-light').click()
    cy.url().should('include', '/Website/login.html')
  })
})

describe('#4 Register page', ()=> {
  it('Visit the register page', () => {
    cy.visit('/Website/register.html')
    cy.get('#SG').click() // Wyszukiwanie elementu po ID 
  })
  it('Back to home page', () => {
    cy.visit(linkToWebsite)
    cy.get('.button.is-primary').click()
    cy.url().should('include', '/Website/register.html')
    cy.get('#SG').click()
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
    /* 
    invoke('text') → wywoła metodę .text() z jQuery i zwróci tekst.
    invoke('val') → wywoła metodę .val() i zwróci wartość inputa.
    invoke('attr', 'href') → wywoła metodę .attr('href') i zwróci wartość atrybutu.
    */
    cy.get('.btnDelete').click()
    cy.get('.textA').should('be.empty')
  }),
  it('Chec if the text stay in textarea after refresh', () => {
    cy.visit(linkToWebsite)
    cy.get('.textA').type('Random text')
    cy.get('.textA').invoke('val').should('include', 'Random')
    cy.get('.btnSave').click()
    cy.reload()
    cy.get('.textA').invoke('val').should('not.be.empty')
    cy.get('.btnDelete').click()
  })
})