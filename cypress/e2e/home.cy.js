describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://computer-database.gatling.io/computers')
    cy.title().should('eq','Computers database')
  })
})