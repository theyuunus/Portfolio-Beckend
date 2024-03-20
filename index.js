const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const cors = require("cors");
const port = process.env.PORT || 3000;

server.use(cors()); 
server.use(router);
server.use(middlewares);

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
});
