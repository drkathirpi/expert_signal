const mongoose = require("mongoose");

const MONGOURL = "mongodb+srv://ferventdev:ferventdev@userdata.mkiqn.mongodb.net/expertData?retryWrites=true&w=majority";

const InitiateMongoServer = () => {
    mongoose.connect(MONGOURL, {useNewUrlParser: true})
    .then(()=> 'Connected to MongoDB')
    .catch((err)=> console.log(err) )
}

module.exports = InitiateMongoServer;