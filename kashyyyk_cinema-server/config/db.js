const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/Kashyyyk_Cinema';

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection failed:', error);
        process.exit(1); // Exit the process on connection failure
    }
};

module.exports = connectDB;
