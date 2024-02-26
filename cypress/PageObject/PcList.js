class PcList{
    constructor() {
        this.title = '#main > h1'
        this.filterField = '[id="searchbox"]',
        this.filterButton = '[id="searchsubmit"]',
        this.addPcButton = '[id="add"]',
        this.alertMessage = '[class="alert-message warning"]'
        this.firstpc = 'tbody > tr:nth-child(1) > td:nth-child(1) > a'
    }

    clickAddPcbutton() {
      return this.addPcButton.click()
    }
}

export default PcList;