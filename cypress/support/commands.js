import ComputerPage from "../PageObject/ComputerPage";

Cypress.Commands.add('createPc', (names, introDate, discDate, value) => {
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
    if(value !== '') {
      cy.get(addPc.company).select(value)
    }
    cy.get(addPc.createButton).click()
})

Cypress.Commands.add('searchTable', () =>{
  cy.get('tbody tr').then(rows => {
    for (let i = 1; i <= rows.length; i++) {
      cy.get(`tbody tr:nth-child(${i}) td:nth-child(1)`).invoke('text').then(text => {
        expect(text.trim().toLowerCase()).to.include('ace');
      });
    }
  })
})