const mongoose = require('mongoose');

const connectDB = async () => {

    await mongoose.connect("mongodb+srv://navjotkumarsinghom:Cfr45tgv@namastenode.crxad4y.mongodb.net/devTinder");

}
module.exports = connectDB;
