const mongoose = require("mongoose");

require("dotenv").config();

mongoose.set("strictQuery", true);

async function main() {
    await mongoose.connect(`mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.xuysaxm.mongodb.net/?appName=Cluster0`);
    
    console.log("Conectado ao banco de dados!");
}

main().catch((err) => console.log(err));

module.exports = main;

