import http from 'node:http';

const users = [];

// Criar um usuário (name, email, senha)
const server = http.createServer((request, response) => {
  const { method, url } = request;

  if (method === "GET" && url === "/users") {
    return response
      .setHeader('Content-Type', 'application/json')
      .end(JSON.stringify(users));
  }

  if (method === "POST" && url === "/users") {
    users.push({
      id: 1,
      name: "John Doe",
      email: "john.doe@gmail.com"
    });

    return response
      .setHeader('Content-Type', 'application/json')
      .end(JSON.stringify(users));
  }

  return response.end("");
});

server.listen(3333);