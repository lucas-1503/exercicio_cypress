/// <reference types="cypress" />

describe('Agenda de Contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/');
        });
    
        it("Deve incluir informações no formulário", () => {
            cy.get('input[type="text"]').type("Lucas Montezuma"); 
            cy.get('input[type="email"]').type("lucasmontezuma@gmail.com"); 
            cy.get('input[type="tel"]').type("11994294990"); 
            cy.contains("Adicionar").click(); 
            cy.screenshot("teste-incluir"); 
        });
        it("Deve alterar a informação da lista", () => {
            cy.get(":nth-child(2) > .sc-gueYoa > .edit").click(); 
            cy.get('input[type="text"]').clear().type("Lucas Montezuma"); 
            cy.get('input[type="email"]').clear().type("lucasmontezuma2@gmail.com"); 
            cy.get('input[type="tel"]').clear().type("11912345678"); 
            cy.get(".alterar").click(); 
            cy.screenshot("teste-editar"); 
            });
        it("Deve remover um contato da lista", () => {
            cy.get(":nth-child(3) > .sc-gueYoa > .delete").click(); 
            cy.screenshot("teste-remover"); 
        });
    });