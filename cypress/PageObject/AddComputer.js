class AddComputer {
  constructor() {
   // this.addTitlePage = () => cy.get('#main > h1'),
    this.pcname = '[id="name"]',
    this.introduced = '[id="introduced"]',
    this.discontinued = '[id="discontinued"]',
    this.company = '[id="company"]',
    this.createButton = '[class="btn primary"]',
    this.cancelButton = '[class="btn"]'
  }


  //method for input a name
  inputName(name) {
   return this.pcname().type(name)
  }

  inputIntDate(date) {
    return this.introduced().type(date)
  }

  inputDiscDate(date) {
    return this.discontinued().type(date)
  }

  selectCompanyValue(value) {
    return this.company().select(value)
  }

  clickCreateButton() {
   return this.createButton().click()
  }
}

export default AddComputer;