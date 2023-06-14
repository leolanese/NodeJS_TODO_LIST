const mongoose = require('mongoose');

/**
 * Connect to MongoDB
 * @param {boolean} exitOnError Whether to exit the process if a connection error occurs
 * @returns {Promise<void>}
 */
const connectDB = async (exitOnError = true) => {
    const { MONGO_URI } = process.env;

    if (!MONGO_URI) {
        throw new Error("Environment variable MONGO_URI is not set");
    }

    try {
        const conn = await mongoose.connect(MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        });

        console.log(`MongoDB connected: ${conn.connection.host}`.blue.underline);
    } catch (error) {
        console.error('Error connecting to MongoDB'.red.underline.bold, error);
        
        if (exitOnError) {
            process.exit(1);
        }
    }
}

module.exports = connectDB;
