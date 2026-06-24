import express from "express";
import cors from "cors";
import mysql from "mysql";
import session from "express-session";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import db from "./db.js";
 
dotenv.config();

const app = express();
app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ["POST", "GET", "PUT", "DELETE"],
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
 
 
// CREATE
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
            return res.status(500).json({ error: "Erro ao cadastrar" });
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
            return res.status(500).json({ error: "Erro ao cadastrar" });
            }
 
            if(data.length > 0){
                req.session.username = data[0].name;
               // console.log(req.session.username);
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


//rota de logout
app.get("/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ error: "Erro ao encerrar sessão" });
        }
        res.clearCookie("connect.sid"); //nome padrão do cookie do express-sessions
        return res.json({ message: "Logout realizado com sucesso" });
    })
})


// READ - GET
app.get("/cadastrados", (req, res) => {
    const sql = "SELECT id, name, email FROM cadastro";

    db.query(sql, (err, data) => {
        if (err) return res.status(500).json(err);

        return res.json(data); // retorna lista
    });
});

// READ que busca por id
app.get("/cadastrados/:id", (req, res) => {
    const sql = "SELECT id, name, email FROM cadastro WHERE id = ?";

    db.query(sql, [req.params.id], (err, data) => {
        if (err) return res.status(500).json(err);

        return res.json(data[0]); // apenas 1 usuário
    });
});

// UPDATE - PUT
app.put("/cadastrados/:id", (req, res) => {
    const sql = "UPDATE cadastro SET name = ?, email = ? WHERE id = ?";

    db.query(sql, [req.body.name, req.body.email, req.params.id],
        (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ error: "Erro ao atualizar" });
            }

            return res.json({ message: "Usuário atualizado com sucesso"});
        }
    );
});


//DELETE
app.delete("/cadastrados/:id", (req, res) => {
    const sql = "DELETE FROM cadastro WHERE id = ?";

    db.query(sql, [req.params.id], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: "Erro ao excluir" });
        }

        return res.json({ message: "Usuário excluído com sucesso" });
    });
});

 
app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`);
})
 