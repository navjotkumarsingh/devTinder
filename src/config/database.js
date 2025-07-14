const mongoose = require('mongoose');

const connectDB = async () => {

    await mongoose.connect("mongodb+srv://navjotkumarsingh81:Cfr45tgv@namastenode.pnvdav5.mongodb.net/DevCoNN");

}
module.exports = connectDB;
