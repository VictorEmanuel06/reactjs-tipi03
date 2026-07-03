const Memoria = require("../models/Memoria");

const createMemory = async(req, res) => {
    res.json("Funcionou!");
}

module.exports = {
    createMemory,
};