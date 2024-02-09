Relatório de Apresentação da API Games

1. Introdução:
A API Games foi desenvolvida para fornecer serviços RESTful relacionados a usuários (User) e jogos (Jogo). Ela oferece operações como buscar, criar, atualizar e excluir usuários, bem como operações semelhantes para jogos.

2. Informações Gerais:

Versão OpenAPI: 3.0.0
Título: Games
Descrição: REST API para gerenciamento de usuários e jogos.
Contato:
Nome: ArturApi
E-mail: a043220@umaia.pt
Versão da API: 0.0.1
3. Endpoints Principais:

Usuários (Users):

/Users:
GET: Buscar todos os usuários. (Cardinalidade: 1:N - Um endpoint, múltiplos usuários).
POST: Criar um novo usuário. (Cardinalidade: 1:1 - Um endpoint, um novo usuário).
/Users/{id}:
GET: Buscar um usuário por ID. (Cardinalidade: 1:1 - Um endpoint, um usuário).
PUT: Atualizar informações de um usuário por ID. (Cardinalidade: 1:1 - Um endpoint, um usuário).
DELETE: Excluir um usuário por ID. (Cardinalidade: 1:1 - Um endpoint, um usuário).
Jogos (Jogo):

/Jogo:
GET: Buscar todos os jogos.
POST: Criar um novo jogo.
/Jogo/{id}:
GET: Buscar um jogo por ID.
PUT: Atualizar informações de um jogo por ID.
DELETE: Excluir um jogo por ID.

4. Controllers:

UserController:
Responsável pelo gerenciamento de operações relacionadas a usuários.
JogoController:
Responsável pelo gerenciamento de operações relacionadas a jogos.


5. Especificações Importantes:

A API suporta formatos JSON e XML.
A documentação utiliza Swagger/OpenAPI para descrição dos endpoints.
6. Componentes:

Schemas:

User: Representa a estrutura de dados de um usuário.
Jogo: Representa a estrutura de dados de um jogo.

7. Considerações Finais:
A API Games oferece uma interface clara e consistente para o gerenciamento de usuários e jogos, seguindo as práticas de design RESTful. A documentação detalhada, juntamente com os exemplos fornecidos, facilita a integração e uso por desenvolvedores.

8. Acesso à API:
Base URL: http://localhost:8080
