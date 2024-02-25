import AddComputer from "../PageObject/AddComputer";
import PcList from "../PageObject/PcList";

describe('Computer List Application', () => {
  const pcList = new PcList()
  const addPc = new AddComputer() 
  
  beforeEach(() => {
    cy.visit('/')
    cy.title().should('eq','Computers database')
    cy.get(pcList.addPcButton).click()

  });
 
  it('is online', () => { 
    
  })

  it('should add a new computer with all required fields filled correctly', () => {
    cy.createPc("ThiagoPC", "2022-12-24", "2024-12-24", 1)  
    cy.get(pcList.alertMessage)
      .should('be.visible')
      .contains('Done ! Computer ThiagoPC has been created')
  });

  it('should prompt user to fill in all required fields when adding a computer with missing required fields', () => {
    
    cy.createPc("", "", "", "")
  });

  it('invalid data format', () => {
   
    cy.createPc("ThiagoPc", "20241222", "0000000", "")
  });

  it('Discontinued data should be before introduction date', () => {
   
    cy.createPc("ThiagoPC", "2022-12-12", "2021-12-12", "")
  });

  it.only('Cancel button should return to previews page', () => {
    cy.get(addPc.cancelButton)
      .should("be.visible")
      .click()
    cy.title().should('eq','Computers database')
  });


})

Cypress.Commands.add('createPc', (names, introDate, discDate) => {
  const addPc = new AddComputer() 
  cy.get(addPc.pcname).type(names);
  cy.get(addPc.introduced).type(introDate)
  cy.get(addPc.discontinued).type(discDate)
  //cy.get(addPc.company).value(value)
  cy.get(addPc.createButton).click()
  }
)

