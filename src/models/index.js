import mongoose from 'mongoose';
import 'dotenv/config';
import Trade from './trade';

const connectDb = () => {
  console.log(process.env.DATABASE_URL);
  mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    keepAlive: 11200, //ms
  });

  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'MongoDB connection error:'));

  db.once('open', () => console.log('Connected to mongo!!'));

  return db;
};

const models = { Trade };

export { connectDb };

export default models;
