const mongoose = require('mongoose');

const URI ="mongodb+srv://utd:utd123456@utd8a.0c7ak.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log('JORGE TE HAZ CONECTADO EXITOSAMENTE AL MONGO ATLAS ');
};

module.exports = connectDB;
