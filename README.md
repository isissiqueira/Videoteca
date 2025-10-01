# 🎬 Videoteca

Uma aplicação web simples para cadastrar, listar, editar e remover vídeos favoritos, construída com Node.js, Express, Sequelize e Handlebars.

## ✨ Funcionalidades

- Cadastro de vídeos com autor, título, assunto, descrição e link do YouTube
- Listagem de todos os vídeos cadastrados com player incorporado
- Edição e remoção de vídeos
- Interface responsiva com Bootstrap

## 🚀 Como rodar o projeto

1. **Clone o repositório**
   ```
   git clone https://github.com/seu-usuario/videoteca.git
   cd videoteca
   ```

2. **Instale as dependências**
   ```
   npm install
   ```

3. **Inicie o servidor**
   ```
   node index.js
   ```
   O servidor rodará em [http://localhost:9443](http://localhost:9443)

4. **Acesse no navegador**
   ```
   http://localhost:9443
   ```

> ⚠️ **Requisito:**  
> Este projeto foi testado e funciona corretamente com **Node.js v20.x**.  
> Versões mais recentes podem causar incompatibilidades com dependências como `sqlite3`.

## 🛠️ Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [SQLite](https://www.sqlite.org/)
- [Handlebars](https://handlebarsjs.com/)
- [Bootstrap](https://getbootstrap.com/)

## 📂 Estrutura do projeto

```
videoteca/
├── controllers/
│   └── ControllerVideo.js
├── db/
│   └── db.js
├── models/
│   └── Video.js
├── routes/
│   └── routesVideo.js
├── views/
│   ├── layouts/
│   │   └── main.handlebars
│   └── videos/
│       ├── Cadastrar.handlebars
│       ├── listar.handlebars
│       └── update.handlebars
├── index.js
├── package.json
└── videoteca.sqlite
```

## 💡 Próximos passos (melhorias sugeridas)

- Validação de links e campos obrigatórios
- Busca e filtros por título, autor ou assunto
- Paginação da listagem
- Mensagens de feedback ao usuário
- Confirmação antes de excluir vídeos
- Melhorias visuais, com layout mais moderno

## 📸 Demonstração

![videoteca-demo](https://user-images.githubusercontent.com/your-github/demo.gif)

---
## 🎓 Sobre o projeto

Este projeto foi desenvolvido por [Isis Siqueira](https://github.com/isissiqueira), como atividade prática do curso **REPROGRAME-SE** (IFES, 2024). 💜