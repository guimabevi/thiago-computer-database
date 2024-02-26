import PcList from "../PageObject/PcList";

describe('Computer List Application home tests', () => {
  const pcList = new PcList()

  beforeEach(() => {
    cy.visit('/')
    cy.title().should('eq','Computers database')
  });

  context("Filtering tests", () => {
    it('Filter pc name', () => {
      cy.get(pcList.filterField).type("ace")
      cy.get(pcList.filterButton)
        .should('be.visible')
        .click()
      cy.searchTable()
      cy.get(pcList.title).contains('6 computers found')
    })

    it("Filter with null text should fail", () => {
      cy.get(pcList.filterField).clear()
      cy.get(pcList.filterButton)
        .should('be.visible')
        .click()
      cy.get(pcList.filterField)
        .invoke('prop', 'validationMessage')
        .should((text) => {
          expect(
            'Preencha este campo.'
          ).to.eq(text)
        })
      cy.get(pcList.title).contains('574 computers found')
    })
 })
})
  


