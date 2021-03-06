/// <reference types="Cypress" />

const faker = require('faker')

describe('Create Project', () => {
    beforeEach (() => {cy.login()})
    it('successfully', () => {
        const project = {
            nome: `project-${faker.random.uuid()}`,
            descirpiton: faker.random.words(5)
        }
        cy.gui_createProject(project)
        
        cy.url().should('be.equal', `${Cypress.config('baseUrl')}${Cypress.env('user_name')}/${project.nome}`)
        cy.contains(project.nome).should('be.visible')
        cy.contains(project.descirpiton).should('be.visible')
    })
})