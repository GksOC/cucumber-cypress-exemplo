#language: pt

Funcionalidade: Administração de livros Hub de leitura
Como administrador do sistema
Quero adicionar, editar e remover múltiplos livros de uma só vez
Para que eu possa gerenciar o catálogo de forma rápida e eficiente

@skip
Cenário: Adicionar novos livros com tabela de exemplos
    Dado que eu estou na página de administrador de livros
    Quando eu adiciono novos livros com os seguintes dados:
    | titulo           | autor         | categoria | exemplares |
    | Livro de teste 1 | Autor teste 1 | 1         | 2          |
    | Livro de teste 2 | Autor teste 2 | 2         | 30         |
    | Livro de teste 3 | Autor teste 3 | 3         | 300        |
    Então deve aparecer uma mensagem: "Livro adicionado com sucesso!"

Esquema do Cenário: Adicionar livros usando esquema do cenário - Livro: "<titulo>", "<autor>", "<categoria>", exemplares: "<exemplares>"
    Dado que eu estou na página de administrador de livros
    Quando eu adiciono um livro com "<titulo>", "<autor>", "<categoria>" e "<exemplares>"
    Então deve aparecer uma mensagem: "Livro adicionado com sucesso!"

    Exemplos:
    | titulo           | autor         | categoria | exemplares |
    | Livro de teste 1 | Autor teste 1 | 1         | 2          |
    | Livro de teste 2 | Autor teste 2 | 2         | 30         |
    | Livro de teste 3 | Autor teste 3 | 3         | 300        |
    | Livro de teste 4 | Autor teste 4 | 5         | 60         |
    | Livro de teste 5 | Autor teste 1 | 6         | 4          |
    | Livro de teste 6 | Autor teste 5 | 4         | 600        |