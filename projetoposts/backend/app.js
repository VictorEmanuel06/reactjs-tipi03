const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors())
app.use(express.json())
//pasta que passa a ser visível no front-end
app.use(express.static("public"));

require("./db/conexao");

const portServidor = 3045;

const memoryRoutes = require("./routes");

app.use("/memorias", memoryRoutes);

app.listen(portServidor, async() => {
    console.log(`Rodando na porta ${portServidor}`);
});

