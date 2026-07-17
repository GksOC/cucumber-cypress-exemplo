/// <reference types="cypress" />
import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor';
import { faker } from '@faker-js/faker';

beforeEach(() => {
    cy.login('admin@biblioteca.com', 'admin123');
});

Given(`que eu estou na página de administrador de livros`, () => {
    cy.get('.modal-footer > .btn').click();
    cy.get('.btn-primary').click();
});

When(`eu adiciono um novo livro com os dados obrigatórios`, () => {
    cy.adicionarLivro(
        faker.book.title(),
        faker.book.author(),
        (Math.floor(Math.random()*1e13)),
        (Math.floor(Math.random() * 15) + 1),
        faker.book.publisher(),
        (Math.floor(Math.random() * (2025 - 1946) + 1946)),
        (Math.floor(Math.random() * 999) + 1),
        (Math.floor(Math.random() * 9) + 1),
        faker.hacker.phrase()
    );
});

Then(`deve aparecer uma mensagem: {string}`, (arg0) => {
    cy.get('#alert-container').should('contain', arg0);
});

Given(`existe um livro listado no catálogo`, () => {
    //return "pending"
    cy.adicionarLivro('hub', 'teste', '123', 1, 'teste', '1999', '123', '10', 'test');
    cy.get('#search-input').type('hub');
    cy.wait(1000);
});

When(`eu edito os detalhes do livro`, () => {
    cy.get('[title="Editar"]').first().click();
    cy.get('#book-category').select(1);
    cy.get('#save-book-btn').click();
});

Then(`deve aparecer uma mensagem de atualização: {string}`, (arg0) => {
    cy.get('#alert-container').should('contain', arg0);
});

When(`eu removo os detalhes do livro`, () => {
    cy.get('[title="Excluir"]').first().click();
    cy.get('#confirm-delete-btn').click();
});

Then(`deve aparecer uma mensagem de exclusão: {string}`, (arg0) => {
    cy.get('#alert-container').should('contain', arg0);
});

When("eu adiciono novos livros com os seguintes dados:", (dataTable) => {
    const books = dataTable.hashes();
    books.forEach(book => {
        cy.wait(2000);
        cy.adicionarLivro(
            book.titulo, 
            book.autor,
            Math.floor(Math.random()*1e13),
            parseInt(book.categoria),
            faker.book.publisher(),
            (Math.floor(Math.random() * (2025 - 1946) + 1946)),
            (Math.floor(Math.random() * 999) + 1),
            book.exemplares,
            faker.hacker.phrase()
        );
    });
});

When(`eu adiciono um livro com {string}, {string}, {string} e {string}`, (titulo, autor, categoria, exemplares) => {
    cy.wait(2000);
    cy.adicionarLivro(
        titulo, 
        autor,
        Math.floor(Math.random()*1e13),
        parseInt(categoria),
        faker.book.publisher(),
        (Math.floor(Math.random() * (2025 - 1946) + 1946)),
        (Math.floor(Math.random() * 999) + 1),
        exemplares,
        faker.hacker.phrase()
    );
});