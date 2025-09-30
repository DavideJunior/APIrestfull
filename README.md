# API Blog - Projeto da Faculdade

Esta é uma API RESTful desenvolvida como um projeto de faculdade, utilizando Node.js, Express e Sequelize com um banco de dados MySQL. A API permite gerenciar usuários, categorias e postagens de um blog.

## Funcionalidades

- CRUD completo para Usuários (`/users`)
- CRUD completo para Categorias (`/categories`)
- CRUD completo para Postagens (`/posts`)
- Relacionamento entre postagens, usuários (autores) e categorias.

---

## Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:
- [Node.js](https://nodejs.org/en/) (versão 18 ou superior)
- [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- Um servidor de banco de dados [MySQL](https://www.mysql.com/) rodando localmente.
- [Git](https://git-scm.com/) (opcional, para clonar o projeto).

---

## 🚀 Como Rodar o Projeto

Siga os passos abaixo para configurar e executar o projeto em seu ambiente local.

### 1. Clonar o Repositório
```bash
git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
cd seu-repositorio
```

### 2. Instalar as Dependências
Este comando irá instalar todos os pacotes necessários, como Express, Sequelize, etc.
```bash
npm install
```

### 3. Configurar o Banco de Dados
A aplicação precisa de um banco de dados MySQL para funcionar.

a. **Acesse seu MySQL** pelo terminal ou por uma ferramenta de sua preferência.

b. **Crie o banco de dados** que será utilizado pela aplicação:
```sql
CREATE DATABASE apirestful;
```

### 4. Configurar as Variáveis de Ambiente
Crie um arquivo chamado `.env` na raiz do projeto. Ele guardará as credenciais do seu banco de dados e outras informações sensíveis.

a. Copie o conteúdo do arquivo de exemplo `.env.example` (se você tiver um) ou crie o `.env` do zero.

b. Adicione as seguintes variáveis e ajuste os valores para a sua configuração local:
```
# Configuração do Banco de Dados
DATABASE_URL="mysql://root:SUA_SENHA_AQUI@localhost:3306/apirestful"

# Porta da Aplicação
PORT=3001

# Chave secreta para tokens JWT (se você implementar autenticação)
JWT_SECRET="sua_chave_secreta_aqui"
```
> **Atenção:** Se o seu usuário `root` do MySQL não tiver senha, deixe a seção da senha vazia: `mysql://root:@localhost...`

### 5. Rodar as Migrations
Este comando irá criar todas as tabelas (`users`, `categories`, `posts`) no seu banco de dados.
```bash
npx sequelize-cli db:migrate
```

### 6. Iniciar o Servidor
Com tudo configurado, inicie a aplicação em modo de desenvolvimento. O `nodemon` irá reiniciar o servidor automaticamente a cada alteração no código.
```bash
npm run dev
```
Se tudo der certo, você verá a mensagem `🚀 Servidor rodando na porta 3001` no seu terminal.

---

## 📖 Endpoints da API

A API estará disponível em `http://localhost:3001`. Aqui estão os principais endpoints:

#### Usuários (`/users`)
- `POST /users`: Cria um novo usuário.
- `GET /users`: Lista todos os usuários.
- `GET /users/:id`: Busca um usuário por ID.
- `PUT /users/:id`: Atualiza um usuário.
- `DELETE /users/:id`: Deleta um usuário.

**Exemplo de body para `POST /users`:**
```json
{
  "name": "Maria Souza",
  "email": "maria.souza@example.com",
  "password": "senha123"
}
```

#### Postagens (`/posts`)
- `POST /posts`: Cria uma nova postagem.
- `GET /posts`: Lista todas as postagens (incluindo autor e categoria).
- `GET /posts/:id`: Busca uma postagem por ID.
- `PUT /posts/:id`: Atualiza uma postagem.
- `DELETE /posts/:id`: Deleta uma postagem.

**Exemplo de body para `POST /posts`:**
```json
{
  "title": "Sequelize é incrível",
  "content": "Conteúdo da postagem sobre Sequelize...",
  "userId": 1,
  "categoryId": 1
}
```

#### Categorias (`/categories`)
- `POST /categories`: Cria uma nova categoria.
- `GET /categories`: Lista todas as categorias.

**Exemplo de body para `POST /categories`:**
```json
{
  "name": "Desenvolvimento Web"
}
```