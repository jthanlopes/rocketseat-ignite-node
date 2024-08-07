import http from 'node:http';

// Criar um usuário (name, email, senha)
const server = http.createServer((request, response) => {
  return response.end("Hello, world!");
});

server.listen(3333);