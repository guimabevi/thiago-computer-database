import AddComputer from "../PageObject/ComputerPage";
import PcList from "../PageObject/PcList";

describe('Computer List Application home tests', () => {
  const pcList = new PcList()
  
  beforeEach(() => {
    cy.visit('/')
    cy.title().should('eq','Computers database')
  });

  context("Filtering tests", () => {
    it.only('Filter pc name', () => {
      cy.get(pcList.filterField).type("Ace")
      cy.get(pcList.filterButton)
        .should('be.visible')
        .click()
      cy.get('tbody tr').then(rows => {
          // Loop through each row
          for (let i = 1; i <= rows.length; i++) {
            cy.get(`tbody tr:nth-child(${i}) td:nth-child(1)`).invoke('text').then(text => {
              expect(text.trim().toLowerCase()).to.include('ace');
            });
          }
        })

      })
      
    })
  })
  


