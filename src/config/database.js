const mongoose = require('mongoose');

const connectDB = async () => {

    await mongoose.connect("mongodb+srv://navjotkumarsingh81:Cfr45tgv@namastenode.pnvdav5.mongodb.net/devTinder");

}
module.exports = connectDB;
