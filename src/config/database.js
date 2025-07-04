const mongoose = require('mongoose');

const connectDB = async () => {

    await mongoose.connect("mongodb+srv://navjotkumarsingh81:bkuMYKPbtje4vMSB@namastenode.lnrbdll.mongodb.net/devTinder");

}
module.exports = connectDB;
