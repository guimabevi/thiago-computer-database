Cypress.Commands.add('createPc', (names, introDate, discDate) => {
    const addPc = new AddComputer() 
    cy.get(addPc.pcname).type(names);
    cy.get(addPc.introduced).type(introDate)
    cy.get(addPc.discontinued).type(discDate)
    //cy.get(addPc.company).value(value)
    cy.get(addPc.createButton).click()
    }
  )