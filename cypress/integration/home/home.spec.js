/* eslint-disable no-undef */
describe("Home page", () => {
    //do before each test
    beforeEach(() => {
        cy.visit('/')
    })

    //test group: top bar
    //existence
    it('should have a navbar on the top with a title and a button.',() => {
        cy.get('nav')
          .findByRole('button')
          .should('exist')
          
        cy.get('h1')
          .findByText(/\w{1,}/)
          .should('exist')
    })
    //functionality
    it('should open a new recipe component when button is clicked', () => {
        cy.get('button').click()
            .get('form')
    })
    //test group: new recipe form
    //existence
    it('should have a new recipe form with name, indgredient and steps inputs', () => {
      cy.findByRole('button').click()
      cy.findByLabelText((/Recipe Name/i))
      cy.findByLabelText((/Ingredients/i))
      cy.findByLabelText((/Recipe Steps/i))
    })
    //functionality
    it('should add new recipe to recipe sidbar upon submit', () => {
      cy.findByRole('button').click()
      cy.findByLabelText((/Recipe Name/i)).type('new yum yum')
      cy.findByLabelText((/Ingredients/i)).type('whatever you want')
      cy.findByLabelText((/Recipe Steps/i)).type('cook it')
      cy.findByLabelText((/Add/i)).click()
      cy.findByText((/new yum yum/i)).should('exist')

    })

    //test group: recipe sidebar
    //existence
    it('should have a recipe sidebar which lists available recipes', ()=>{
      cy.get('[name=sidebar]')
        .should('exist')

    })
    it('sidebar should have a search component', () => {
      cy.get('[name=sidebar]')
        .findByLabelText('search')

    })
    //functionality

    //test group: current recipe
    //existence
    it('should have an ingredients sidebar', () => {

    })
    it('should have a step checklist', () => {

    })
    //functionality
});
