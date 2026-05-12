Um site funcional para cadastro, login e edição de dados de usuários, desenvolvido para aprimorar habilidades full-stack.


Sobre o projeto:

Este projeto tem como objetivo o desenvolvimento de um CRUD (Cadastro, Leitura, Atualização, Exclusão) simples de contas de usuário.
O usuário pode se cadastrar, fazer login e editar suas próprias informações.

Principais funcionalidades:

Funcionalidades
- Autenticação: Cadastro e Login via Node.js.
- Gerenciamento: Edição de dados do usuário após login.
- Fluxo: Login redireciona automaticamente para a tela de consulta/edição.

Tecnologias utilizadas:

- Back-end: [Node.js](https://nodejs.org/)
- Banco de Dados: [MariaDB](https://mariadb.org)
- ORM: [Prisma](https://www.prisma.io/)
- Front-end: HTML5, CSS3, JavaScript (Vanilla)
- Ferramentas: VS Code, Insomnia

Como executar o projeto:

Pré-requisitos
- [Node.js](https://nodejs.org/) (v14+ recomendado)
- [MariaDB](https://mariadb.org)
- Navegador web

Passos:
1. Clone o repositório: git clone https://github.com

2. Configure o Banco de Dados:
   - Crie o banco de dados no MariaDB.
   - Configure o arquivo `.env` dentro de `backend/projeto-backend/` com suas credenciais do banco.
   - Execute as migrations do Prisma:
     cd backend/projeto-backend
     npx prisma migrate dev

3. Inicie o Back-end: node index.js

4. Execute o Front-end:
   - Abra o arquivo `frontend/projeto-frontend/Login.html` no seu navegador.
