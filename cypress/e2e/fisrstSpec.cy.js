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
  it('Check if the text stay in textarea after refresh', () => {
    cy.visit(linkToWebsite)
    cy.get('.textA').type('Random text')
    cy.get('.textA').invoke('val').should('include', 'Random')
    cy.get('.btnSave').click()
    cy.reload()
    cy.get('.textA').invoke('val').should('not.be.empty')
    cy.get('.btnDelete').click()
  })
})

describe('#6 Lists', ()=> {
  it('Check if there is a possibility to select all options from the multiple-choice list', ()=> {
    cy.visit(linkToWebsite)
    cy.get('[data-cy-checkbox="listCheckboxCy"]').find('input[type="checkbox"]').check() 
    cy.get('[data-cy-checkbox="listCheckboxCy"]').find('input[type="checkbox"]').should('be.checked')
    /* Dany test najpierw znajduje wszystkie możliwe opcje z listy, potem je zaznacza, a na samym końcu iteruje po każdej
    opcji, gdzie następnie sprawdza czy każdy jest zaznaczony */
  }),
  it('Check if there is a possibility to select one options from the single-selection list', ()=> {
    cy.visit(linkToWebsite)
    cy.get('[data-cy-radio="listRadioCy"]')
    cy.get('[data-cy-radio="White"]').check()
    cy.get('[data-cy-radio="White"]').should('be.checked')
  }),
  it('Check if there is a possibility to change the default value of the drop-down list', ()=> {
    cy.visit(linkToWebsite)
    cy.get('[data-cy-select="listSelectCy"]')
    cy.get('[data-cy-select="listSelectCy"]').select('lion') /* musi być brana wartość VALUE (W SELECT), a nie DATA-CY-SELECT="LION" */
    cy.get('[data-cy-select="listSelectCy"]').should('have.value', "lion")
  }),
  it('Check if there is a possibility to change all values in all lists', ()=> {
    cy.visit(linkToWebsite)
    cy.get('[data-cy-checkbox="listCheckboxCy"]').find('input[type="checkbox"]').check()
    cy.get('[data-cy-checkbox="listCheckboxCy"]').find('input[type="checkbox"]').should('be.checked')
    cy.get('[data-cy-radio="Black"').check()
    cy.get('[data-cy-radio="Black"').should('be.checked')
    cy.get('[data-cy-select="listSelectCy"]').select('fish')
    cy.get('[data-cy-select="listSelectCy"]').should('have.value', 'fish')
  }),
  it('Check and uncheck checkboxes in lists', () => {
    cy.visit(linkToWebsite)
    /* MULTI-SELECTION LIST */
    cy.get('[data-cy-checkbox="Apple"]').check()
    cy.get('[data-cy-checkbox="Apple"]').should('be.checked')
    cy.get('[data-cy-checkbox="Pearl"]').check()
    cy.get('[data-cy-checkbox="Pearl"]').should('be.checked')
    cy.get('[data-cy-checkbox="Apple"]').uncheck()
    cy.get('[data-cy-checkbox="Apple"]').should('not.be.checked')
    cy.get('[data-cy-checkbox="Pearl"]').uncheck()
    cy.get('[data-cy-checkbox="Pearl"]').should('not.be.checked')
    /* SINGLE-SELECTION LIST */
    cy.get('[data-cy-radio="Red"]').check()
    cy.get('[data-cy-radio="Red"]').should('be.checked')
    cy.get('[data-cy-radio="Green"]').check()
    cy.get('[data-cy-radio="Red"]').should('not.be.checked')
  })
})