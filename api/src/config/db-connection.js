const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost/safeKeeps';

const OPTIONS = {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
};

module.exports = async () => {
    const connection = await mongoose.connect(MONGO_URI, OPTIONS);
    console.log('✔️  Database ready...');
    return connection;
};