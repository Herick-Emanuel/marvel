Desafio Prova - API Marvel Saga
Objetivo
Este projeto consiste no desenvolvimento de uma API própria que funciona como intermediário entre a API da Marvel e o usuário final. A API foca em uma saga específica do Universo Marvel, permitindo aos usuários explorar os personagens envolvidos, os quadrinhos que compõem a saga e mais.

Descrição
1. Registro na Marvel API
Para usar esta API, é necessário registrar-se no Marvel Developer Portal e obter uma chave de API.

2. Saga Escolhida
A saga escolhida para esta API é "X-Men: Fênix Negra" (The Dark Phoenix Saga).

3. Modelagem das Entidades
As principais entidades modeladas na API são:

Personagens: Representa os personagens que aparecem na saga, com atributos como nome, descrição e URL da imagem.
Quadrinhos (Comics): Armazena informações sobre os quadrinhos que fazem parte da saga, incluindo título, descrição, data de publicação e capa.
Criadores: Representa os criadores dos quadrinhos, como roteiristas e desenhistas, incluindo nome, função e os quadrinhos aos quais contribuíram.
4. Implementação do CRUD
Operações CRUD foram implementadas para cada uma das entidades (Personagem, Comic, Criador), permitindo criar, ler, atualizar e deletar registros no sistema.

5. Rotas Auxiliares
Além das operações CRUD, foram criadas rotas auxiliares para complementar a funcionalidade da aplicação.

6. Desenvolvimento de Testes
Testes Automatizados: Foram escritos testes unitários e de integração para garantir o correto funcionamento das operações CRUD e da lógica de negócios da API.
Testes End-to-End (E2E): Foram implementados testes E2E para simular o fluxo completo de uso da API, desde a requisição inicial até a resposta final.
Teste de Carga: Foi realizado um teste de carga para avaliar a performance e a estabilidade da API sob condições de uso elevado.
Docker
A aplicação foi containerizada com Docker, facilitando o deployment e garantindo um ambiente de desenvolvimento consistente.

Instruções de Uso
Clone o repositório:
bash
Copy code
git clone https://github.com/seu-usuario/desafio-prova.git
Navegue até o diretório do projeto:
bash
Copy code
cd desafio-prova
Instale as dependências:
bash
Copy code
npm install
Defina as variáveis de ambiente no arquivo .env conforme necessário.
Execute o servidor:
bash
Copy code
npm run start
Acesse a API em http://localhost:4000.
Documentação das Rotas
A documentação das rotas está disponível no diretório docs.
Execute as migrações do banco de dados:
bash
Copy code
npx knex migrate:latest --knexfile=./src/database/knexfile.js
Execute as seeds para popular o banco de dados:
bash
Copy code
npx knex seed:run --knexfile=./src/database/knexfile.js
Executando a aplicação
Para iniciar a aplicação, execute:

bash
Copy code
npm start
A aplicação estará disponível em http://localhost:4000.

Rotas
GET /api/characters: Retorna todos os personagens da saga.
POST /api/characters: Cria um novo personagem.
GET /api/characters/:id: Retorna um personagem específico pelo ID.
PUT /api/characters/:id: Atualiza um personagem existente.
DELETE /api/characters/:id: Exclui um personagem existente.
(Rotas para quadrinhos e criadores são similares)

Docker
Para executar a aplicação utilizando Docker, execute:

bash
Copy code
docker-compose up --build
Isso criará e iniciará os containers para a aplicação e o banco de dados PostgreSQL.

Testes
Testes automatizados: Execute npm test para executar os testes unitários e de integração.
Testes End-to-End (E2E): Os testes E2E estão localizados na pasta tests/e2e.

Relatórios de Testes
Os resultados dos testes estão disponíveis no diretório test-reports.

Contribuição
Contribuições são bem-vindas! Para maiores detalhes, consulte CONTRIBUTING.md.

Licença
Este projeto é licenciado sob a licença MIT.