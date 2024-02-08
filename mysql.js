const mysql = require('mysql');

// Configurar a conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Portugal2@z',
  database: 'game',
  port: 3306
});

// Conectar ao MySQL
connection.connect((err) => {
  if (err) throw err;
  console.log('Conectado ao MySQL');

  // Criar a base de dados
  connection.query('CREATE DATABASE IF NOT EXISTS GamesDB', (err) => {
    if (err) throw err;
    console.log('Banco de dados criado ou existente');

    // Usar a base de dados
    connection.query('USE GamesDB', (err) => {
      if (err) throw err;
      console.log('Usando a base de dados GamesDB');

      // Criar tabela User
      connection.query(`
        CREATE TABLE IF NOT EXISTS Users (
          id INT PRIMARY KEY AUTO_INCREMENT,
          name VARCHAR(255) NOT NULL,
          nick VARCHAR(255) NOT NULL
        )
      `, (err) => {
        if (err) throw err;
        console.log('Tabela Users criada ou existente');

        // Criar tabela Jogo
        connection.query(`
          CREATE TABLE IF NOT EXISTS Jogos (
            id INT PRIMARY KEY AUTO_INCREMENT,
            nome VARCHAR(255) NOT NULL,
            descricao TEXT NOT NULL,
            preco INT NOT NULL
          )
        `, (err) => {
          if (err) throw err;
          console.log('Tabela Jogos criada ou existente');

          // Criar tabela BannedPlayer
          connection.query(`
            CREATE TABLE IF NOT EXISTS BannedPlayers (
              id INT PRIMARY KEY AUTO_INCREMENT,
              playerName VARCHAR(255) NOT NULL,
              reason TEXT NOT NULL
            )
          `, (err) => {
            if (err) throw err;
            console.log('Tabela BannedPlayers criada ou existente');

            // Criar tabela FavoriteGame
            connection.query(`
              CREATE TABLE IF NOT EXISTS FavoriteGames (
                id INT PRIMARY KEY AUTO_INCREMENT,
                gameName VARCHAR(255) NOT NULL,
                userId INT NOT NULL,
                FOREIGN KEY (userId) REFERENCES Users(id)
              )
            `, (err) => {
              if (err) throw err;
              console.log('Tabela FavoriteGames criada ou existente');

              // Fechar a conexão
              connection.end((err) => {
                if (err) throw err;
                console.log('Conexão ao MySQL encerrada');
              });
            });
          });
        });
      });
    });
  });
});
