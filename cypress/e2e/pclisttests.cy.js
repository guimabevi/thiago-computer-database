import AddComputer from "../PageObject/AddComputer";
import PcList from "../PageObject/PcList";

describe('Computer List Application home tests', () => {
  const pcList = new PcList()
  const addPc = new AddComputer() 
  
  beforeEach(() => {
    cy.visit('/')
    cy.title().should('eq','Computers database')
    cy.get(pcList.addPcButton).click()

  });
})