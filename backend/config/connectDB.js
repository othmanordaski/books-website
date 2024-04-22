const mongoose = require('mongoose');
const {color} = require('./colors');
MONGODB_URI = process.env.MONGODB_URI;

exports.connection = () => {
  function connectToMongo() {
    // Attempt to connect to the MongoDB database
    mongoose.connect(MONGODB_URI ).then(
      () => {
        // Connection successful
      },
      (err) => {
        // Connection error
        console.info(color.red, 'Mongodb error', err);
      }
    ).catch((err) => {
      console.log(color.red, 'ERROR:', err);
    });
  }

  mongoose.connection.on('connected', () => {
    // Event: Connected to MongoDB
    console.info(color.green, 'Connected to MongoDB ✓');

  });

  mongoose.connection.on('reconnected', () => {
    // Event: MongoDB reconnected
    console.info('MongoDB reconnected!');
  });

  mongoose.connection.on('error', (error) => {
    // Event: Error in MongoDB connection
    console.error(color.red, `Error in MongoDB connection: ${error}`);
    mongoose.disconnect();
  });

  mongoose.connection.on('disconnected', () => {
    // Event: MongoDB disconnected
    console.error(color.red, `MongoDB disconnected! Reconnecting in ${2000 / 1000}s...`);
    setTimeout(() => connectToMongo(), 2000);
  });

  return {
    connectToMongo,
  };
};