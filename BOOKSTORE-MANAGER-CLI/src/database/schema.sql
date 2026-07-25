-- ===========================================
-- BOOKSTORE MANAGER
-- PostgreSQL
-- ===========================================

DROP TABLE IF EXISTS emprestimos;
DROP TABLE IF EXISTS livros;
DROP TABLE IF EXISTS clientes;
DROP TABLE IF EXISTS autores;

-- ===========================================
-- AUTORES
-- ===========================================

CREATE TABLE autores (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(120) NOT NULL,
    nacionalidade VARCHAR(80),
    data_nascimento DATE
);

-- ===========================================
-- LIVROS
-- ===========================================

CREATE TABLE livros (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(200) NOT NULL,
    isbn VARCHAR(20) UNIQUE,
    ano_publicacao INTEGER,
    quantidade INTEGER NOT NULL DEFAULT 1,
    autor_id INTEGER NOT NULL,

    CONSTRAINT fk_autor
        FOREIGN KEY (autor_id)
        REFERENCES autores(id)
        ON DELETE RESTRICT
);

-- ===========================================
-- CLIENTES
-- ===========================================

CREATE TABLE clientes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(120) NOT NULL,
    email VARCHAR(150) UNIQUE,
    telefone VARCHAR(30)
);

-- ===========================================
-- EMPRESTIMOS
-- ===========================================

CREATE TABLE emprestimos (
    id SERIAL PRIMARY KEY,
    cliente_id INTEGER NOT NULL,
    livro_id INTEGER NOT NULL,
    data_emprestimo DATE NOT NULL,
    data_devolucao DATE,
    devolvido BOOLEAN DEFAULT FALSE,

    CONSTRAINT fk_cliente
        FOREIGN KEY(cliente_id)
        REFERENCES clientes(id),

    CONSTRAINT fk_livro
        FOREIGN KEY(livro_id)
        REFERENCES livros(id)
);