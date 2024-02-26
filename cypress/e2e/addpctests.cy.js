import ComputerPage from "../PageObject/ComputerPage";
import PcList from "../PageObject/PcList";

describe('Add a Computer page tests', () => {
  const pcList = new PcList()
  const addPc = new ComputerPage() 
  
  beforeEach(() => {
    cy.visit('/')
    cy.title().should('eq','Computers database')
    cy.get(pcList.addPcButton).click()
  });

  it('should add a new computer with all required fields filled correctly', () => {
    cy.createPc("ThiagoPC", "2022-12-24", "2024-12-24", 2)  
    cy.get(pcList.alertMessage)
      .should('be.visible')
      .contains('Done ! Computer ThiagoPC has been created')
  });

  it('should prompt user to fill in all required fields when adding a computer with missing required fields', () => {  
    cy.createPc("","", "", "", "")
    cy.get('.error > .input > .help-inline')
        .should('be.visible')
  });

  it('invalid data format', () => {
    cy.createPc("ThiagoPc", "20241222", "0000000", "")
    cy.get('.error > .input > .help-inline')
        .should('be.visible')
  });

  it('Discontinued data should be before introduction date', () => {
    cy.createPc("ThiagoPC", "2022-12-12", "2021-12-12", "")
    cy.get('.error > .input > .help-inline')
      .should('be.visible')
      .contains('Discontinued date is before introduction date')
  });

  it('Cancel button should return to previews page', () => {
    cy.get(addPc.cancelButton)
      .should("be.visible")
      .click()
    cy.title().should('eq','Computers database')
  });


})



