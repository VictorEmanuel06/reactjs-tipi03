import express from "express";
import cors from "cors";
import mysql from "mysql";
import session from "express-session";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();
app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ["POST", "GET"],
     credentials: true
}));

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(session({
    secret: 'secret', //uma chave secreta usada para criptografar o cookie da sessão
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 1000 * 60 * 60 * 24
        } // definindo as propriedades do cookie da sessão
    }));

const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database: "cadastrarpessoas"
});

 //CREATE 
 app.post("/cadastrar", (req, res) => {
    const sql = "INSERT INTO cadastro(name, email, password) VALUES(?)";
    const valores = [
        req.body.name,
        req.body.email,
        req.body.password
    ];

    db.query(sql, [valores], (err, data) => {
        if(err) {
            console.log(err);
            return res.status(500).json({ error: "Erro ao cadastrar "});

        }

        return res.json(data);
    });
    
 });

 //READ
 app.post("/login", (req, res) => {
    const sql = "SELECT * FROM cadastro WHERE email = ? AND password = ?";

    db.query(sql, [req.body.email, req.body.password], (err, data) => {
           if(err) {
            console.log(err);
            return res.status(500).json({ error: "Erro ao cadastrar "});
            }

            if(data.length > 0){
                req.session.username = data [0].name;
                // console.log(req.session.username)
                console.log(req.session.username);
                return res.json("Login realizado com sucesso");
            } else {
                return res.json("Falha no login");
            }
    });
 });

 app.get("/", (req, res) => {
    if (req.session.username) {
        return res.json({
            valid: true,
            name: req.session.username
        });
    } else {
        return res.json({
            valid: false
        });
    }
});

app.listen(7006, () => {
    console.log("Conectado ao banco de dados");
})