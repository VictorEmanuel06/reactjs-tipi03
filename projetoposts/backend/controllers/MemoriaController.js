const Memoria = require("../models/Memoria");

const fs = require("fs");

const createMemory = async(req, res) => {
    try{
        const {title, description} = req.body;

        const src = `img/${req.file.filename}`
        
        if(!title || !description){
            return res.status(400). json({msg: "É necessário preencher todos os campos."})
        }

        const novaMemoria = new Memoria({
            title, src, description
        })

        await novaMemoria.save()

        res.json({msg: "Criada com sucesso!", novaMemoria})

    } catch (error){
        console.log(error.message)
        res.status(500).send("Error")
    }
};

const getMemories = async (req, res) => {
    try{
        const memories = await Memoria.find();

        res.json(memories);
    } catch(error){
        console.log(error.message)
        res.status(500).send("Error")
    }
};

const getMemory = async (req, res) => {
    try{

        const memory = await Memoria.findById(req.params.id);

        if(!memory){
            return res.status(400).json({msg: "Memória não foi encontrada"});
        }

        res.json(memory);

    } catch(error){
        console.log(error.message)
        res.status(500).send("Error")
    }
}

const deleteMemory = async (req, res) => {
    try{
        const memory = await Memoria.findById(req.params.id);

        if(!memory){
            return res.status(400).json({msg: "Memória não foi encontrada"});
        }

        //Excluir a imagem
        fs.unlink(`public/${memory.src}`, (err) => {
            if(err){
                console.log("Erro ao deletar a imagem: ", err);
            } else {
                console.log("Imagem foi deletada com sucesso!")
            }
        });

        //Remover o documento do MongoDB
        await Memoria.findByIdAndDelete(req.params.id);

        res.json({msg: "Memória apagada do Banco de Dados"});

    } catch(error){
        console.log(error.message)
        res.status(500).send("Error")
    }
}

module.exports = {
    createMemory,
    getMemories,
    getMemory,
    deleteMemory,
};