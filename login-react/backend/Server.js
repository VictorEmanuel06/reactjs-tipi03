import express from "express";
import cors from "cors";
import mysql from "mysql";
import session from "express-session";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import db from "./db.js";
import bcrypt from 'bcrypt';
 
dotenv.config();

const app = express();

//config cors
app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());

//config session
app.use(session({
    secret: 'secret', //uma chave secreta usada para criptografar o cookie da sessão
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 1000 * 60 * 60 * 24
    } // definindo as propriedades do cookie da sessão
}));
 

//middleware de autenticação
const verificarLogin = (req, res, next) => {
    if (req.session.username) {
        next();
    } else {
        return res.status(401).json({ error: "Usuário não autenticado" });
    }
}

 
// CREATE - Cadastro
app.post("/cadastrar", async (req, res) => {
try{
    const sql = "INSERT INTO cadastro(name, email, password) VALUES(?)";
    
    const name = req.body.name.trim();
    const email = req.body.email.toLowerCase().trim();
    const password = req.body.password.trim();

    const hash = await bcrypt.hash(password, 10);
 
    db.query(sql, [[name, email, hash]], (err, data) => {
        if(err) {
            console.log(err);
            return res.status(500).json({ error: "Erro ao cadastrar" });
        }
 
        return res.json({ message: "Usuário cadastrado com sucesso" });
    });
} catch {
    return res.status(500).json({ error: "Erro interno"});
}    
});
 
//Login - via Post
app.post("/login", (req, res) => {

    const email = req.body.email.toLowerCase().trim();
    const password = req.body.password.trim();

    const sql = "SELECT * FROM cadastro WHERE email = ?";
 
    db.query(sql, [email], async (err, data) => {
        if (err) return res.status(500).json({ error: "Erro no login" });

        if (data.length === 0) {
            return res.status(401).json({ error: "Email ou senha inválidos" })
        }

        const match = await bcrypt.compare(password, data[0].password);

        if (!match) {
            return res.status(401).json({ error: "Email ou senha inválidos" });
        }

        req.session.username = data[0].name;

        return res.json({
            message: "Login realizado com sucesso",
            name: data[0].name
        });
    });
});
 
// verifica sessão - via get
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


// Listar os usuários (protegido) - via get
app.get("/cadastrados", verificarLogin, (req, res) => {
    const sql = "SELECT id, name, email FROM cadastro";

    db.query(sql, (err, data) => {
        if (err) return res.status(500).json(err);

        return res.json(data); // retorna lista
    });
});

//busca por id (protegido) - via get
app.get("/cadastrados/:id", verificarLogin, (req, res) => {
    const sql = "SELECT id, name, email FROM cadastro WHERE id = ?";

    db.query(sql, [req.params.id], (err, data) => {
        if (err) return res.status(500).json(err);

        return res.json(data[0]); // apenas 1 usuário
    });
});

// UPDATE - Atualizar (Protegido) - via put
app.put("/cadastrados/:id", verificarLogin, (req, res) => {
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


//DELETAR (Protegido) - via delete
app.delete("/cadastrados/:id", verificarLogin, (req, res) => {
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
 