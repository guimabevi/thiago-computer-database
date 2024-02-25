class PcList{
    constructor() {
        this.filterField = '[id="searchbox"]',
        this.filterButton = '[id="searchsubmit"]',
        this.addPcButton = '[id="add"]',
        this.alertMessage = '[class="alert-message warning"]'

    }


    //method for clicking on the Add pc button
    clickAddPcbutton() {
      return this.addPcButton.click()
    }
}

export default PcList;