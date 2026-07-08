const express = require("express");

const router = express.Router();

const upload = require("./helpers/upload");

const { createMemory, getMemories, getMemory, deleteMemory } = require("./controllers/MemoriaController");

router.post("/", upload.single("image"), (req, res, next) =>{
    const image = req.file;

    if(!image){
        return res.status(400).json({msg: "Por favor, envie um arquivo jpeg ou png"});
    }

    next();

}, (req, res) => createMemory(req, res));

router.get("/", (req, res) => getMemories(req, res));

router.get("/:id", (req, res) => getMemory(req, res));

router.delete("/:id", (req, res) => deleteMemory(req, res));



module.exports = router;