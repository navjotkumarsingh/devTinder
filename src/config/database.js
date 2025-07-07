const mongoose = require('mongoose');

const connectDB = async () => {

    await mongoose.connect("mongodb+srv://navjotkumarsingh81:Cfr45tgv@namastenode.nvfrnmu.mongodb.net/devTinder");

}
module.exports = connectDB;
