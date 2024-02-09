Relatório de Apresentação da API Games:

1. Introdução:
A API Games foi desenvolvida para fornecer serviços RESTful relacionados a usuários (User) e jogos (Jogo). Ela oferece operações como buscar, criar, atualizar e excluir usuários, bem como operações semelhantes para jogos, incuíndo também operações que envolvem jogadores banidos e jogos favoritos.

3. Informações Gerais:

Versão OpenAPI: 3.0.0
Título: Games
Descrição: REST API para gerenciamento de usuários, jogos, jogadores banidos e jogos favoritos.
Contato:
Nome: ArturAPI
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
Jogadores Banidos (BannedPlayers):

/BannedPlayers:
GET: Buscar todos os jogadores banidos.
POST: Adicionar um novo jogador banido.
/BannedPlayers/{id}:
GET: Buscar um jogador banido por ID.
DELETE: Remover um jogador banido por ID.
Jogos Favoritos (FavoriteGames):

/FavoriteGames:
GET: Buscar todos os jogos favoritos.
POST: Adicionar um novo jogo favorito.
/FavoriteGames/{id}:
GET: Buscar um jogo favorito por ID.
DELETE: Remover um jogo favorito por ID.

4. Controllers:

UserController:
Responsável pelo gerenciamento de operações relacionadas a usuários.

JogoController:
Responsável pelo gerenciamento de operações relacionadas a jogos.

BannedPlayersController:
Responsável pelo gerenciamento de operações relacionadas a jogadores banidos.

FavoriteGamesController:
Responsável pelo gerenciamento de operações relacionadas a jogos favoritos.

5. Especificações Importantes:

A API suporta formatos JSON.
A documentação utiliza OpenAPI (Swagger) para descrever os endpoints.

6. Componentes:

Schemas:
User: Representa a estrutura de dados de um usuário.
Jogo: Representa a estrutura de dados de um jogo.
BannedPlayer: Representa a estrutura de dados de um jogador banido.
FavoriteGame: Representa a estrutura de dados de um jogo favorito.

7. Considerações Finais:
A API Games agora oferece uma gama mais ampla de funcionalidades, incluindo gestão de jogadores banidos e jogos favoritos. A estrutura continua clara e intuitiva para facilitar a integração e o desenvolvimento de aplicativos.

8. Acesso à API:
Base URL: http://localhost:8080
