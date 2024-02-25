class PcList{
    constructor() {
        this.filterField = () => cy.get('#searchbox'),
        this.filterButton = () => cy.get('#searchsubmit'),
        this.addPcButton = () => cy.get('#add');
        this.alertMessage = '[class="alert-message warning"]'

    }


    //method for clicking on the Add pc button
    clickAddPcbutton() {
      return this.addPcButton().click()
    }
}

export default PcList;