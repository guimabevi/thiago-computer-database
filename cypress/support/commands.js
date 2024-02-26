import ComputerPage from "../PageObject/ComputerPage";

Cypress.Commands.add('createPc', (names = '', introDate, discDate) => {
    const addPc = new ComputerPage() 
    if(names !== ''){
      cy.get(addPc.pcname).type(names);
    }
  
    if(introDate !== ''){
      cy.get(addPc.introduced).type(introDate)
    }

    if(discDate !== ''){
      cy.get(addPc.discontinued).type(discDate)
    }
    //cy.get(addPc.company).value(value)
    cy.get(addPc.createButton).click()
    }
  )

  Cypress.Commands.add('searchPcTable', (namePc) => {
    cy.get('tbody tr').then(rows => {
      // Loop through each row
      for (let i = 1; i <= rows.length; i++) {
        cy.get(`tbody tr:nth-child(${i}) td:nth-child(1)`).invoke('text').then(text => {
          expect(text.trim().toLowerCase()).to.include(namePc.toLowerCase());
        });
      }
    })
  })