import ComputerPage from "../PageObject/ComputerPage";
import PcList from "../PageObject/PcList";

const pcList = new PcList()
const editPc = new ComputerPage()

describe('Computer List Application home tests', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.title().should('eq','Computers database')
    cy.get(pcList.firstpc).click()
  });

  context(("Edit pcs tests"), () => {
    it('edit pc changing the name with sucsses', () => {
     cy.get(editPc.pcname).clear()
     cy.get(editPc.pcname).type("NewPC")
     cy.get(editPc.saveButton)
      .should('be.visible')
      .click()
    cy.get(pcList.alertMessage)
      .should('be.visible')
      .contains('Done ! Computer NewPC has been updated')  
    })

    it('edit and save failure on pc with no name', () => {
      cy.get(editPc.pcname).clear()
      cy.get(editPc.saveButton)
        .should('be.visible')
        .click()
      cy.get('.error > .input > .help-inline')
        .should('be.visible')
    })

    it('Cancel button should return to previews page', () => {
      cy.get(editPc.cancelButton)
        .should("be.visible")
        .click()
      cy.title().should('eq','Computers database')
    });

    context('Delete Pc', () => {
      it("Delete a pc with success",() => {
        cy.get(editPc.deleteButton).click({force : true})
        cy.get(pcList.alertMessage)
        .should('be.visible')
        .contains('Done ! Computer ACE has been deleted')
      })
    })

  })
  
})