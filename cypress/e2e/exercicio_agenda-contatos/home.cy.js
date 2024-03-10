/// <reference types="cypress" />


describe('Testes para a home', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it ('Deve adicionar um novo contato', () => {
        cy.get('input[placeholder="Nome"]').type('Nome Teste')
        cy.get('input[placeholder="E-mail"]').type('teste@teste.com')
        cy.get('input[placeholder="Telefone"]').type('11 99999-9999')
        cy.get('button.adicionar').click()
        cy.get('div.contato').last().should('contain', 'teste@teste.com')
        cy.screenshot('contado-adicionado')
    })
    it('Deve editar um contato)', () => {
        cy.contains('div.contato', 'Nome Teste').within(() => {
            cy.get('button.edit').click()
        })
        cy.get('input[placeholder="Nome"]').clear().type('Nome Editado')
        cy.get('input[placeholder="E-mail"]').clear().type('teste-editado@teste.com')
        cy.get('input[placeholder="Telefone"]').clear().type('11 00000-0000')
        cy.get('button.alterar').click()
        cy.contains('div.contato', 'Nome Editado').should('exist')
        cy.screenshot('contato-editado')
    })
    it('Deve remover um contato)', () => {
        cy.contains('div.contato', 'Nome Editado').within(() => {
            cy.get('button.delete').click()
        })
        cy.contains('div.contato', 'Nome Editado').should('not.exist')
        cy.screenshot('contato-removido')
    })
})