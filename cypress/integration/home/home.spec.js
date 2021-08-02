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
      cy.findByRole('button').click().wait(1000)
      cy.get('#recipeName').type('New Yummy')
      cy.get('#ingredients').type('some stuff')
      cy.get('#recipeSteps').type('cook it')
      cy.get('#addBtn').click().wait(1000)
      cy.contains('New Yummy')
    })

    //test group: recipe sidebar
    //existence
    it('should have a recipe sidebar which lists available recipes', ()=>{
      cy.get('.sideBar')
        .should('exist')

    })
    it('sidebar should have a search component that filters sidebar recipes', () => {
      cy.get('#search').wait(1000).type('Spa')
      cy.contains('Spaghetti')
      cy.contains('PB&J').should('not.exist')
    })
    //functionality

    //test group: current recipe
    //existence
    it('should have a ingredients and steps component', () => {
      cy.get('#curRecIng')
      cy.get('#curRecSteps')
    })
    it('should have a step checklist', () => {

    })
    //functionality
});
