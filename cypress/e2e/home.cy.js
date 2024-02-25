import AddComputer from "../PageObject/AddComputer";
import PcList from "../PageObject/PcList";

describe('Computer List Application', () => {
  const pcList = new PcList()
 
  
  
  beforeEach(() => {
    cy.visit('/');
  });
 
  it('is online', () => { 
    cy.title().should('eq','Computers database')
  })

  it('should add a new computer with all required fields filled correctly', () => {
    pcList.clickAddPcbutton()
    cy.createPc("ThiagoPC", "2022-12-24", "2024-12-24", 1)  
    cy.get(pcList.alertMessage)
      .should('be.visible')
      .contains('Done ! Computer ThiagoPC has been created')
  });

  it('should prompt user to fill in all required fields when adding a computer with missing required fields', () => {

  })
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

