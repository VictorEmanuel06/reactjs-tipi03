const express = require("express");
const mysql  = require("mysql");
const cors = require ("cors");
 
const app = express();
app.use(cors());
app.use(express.json());
 
 
// cria conecxão com o banco de dados
const db =  mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database: "cadastrarpessoas"
});
 
// CREATE
app.post("/cadastrar", (req, res) => {
    const sql = "INSERT INTO cadastro(name, email, password) VALUES(?)";
    const valores = [
        req.body.name,
        req.body.email,
        req.body.password
    ];
 
    db.query(sql, [valores], (err,data) => {
        if(err) {
            console.log(err);
            return res.status(500).json({ error: "Erro ao cadastrar"})
        }
 
        return res.json(data);
    });
});
 
// READ
app.post("/login", (req, res) => {
    const sql = "SELECT * FROM cadastro WHERE email = ? And password = ?";
 
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if(err) {
            console.log(err);
            return res.status(500).json({ error: "Erro ao cadastrar"})
        }
 
        if(data.length > 0){
            return res.json("Login realizado com sucesso");
        } else {
            return res.json("Falha no login");
        }
    });
});
 
app.listen(7006, () => {
    console.log("Conectado ao banco de dados");
})