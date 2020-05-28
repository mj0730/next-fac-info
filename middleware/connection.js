import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';
import dbconnect from '../env/dbconnect';

const client = new MongoClient(dbconnect, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function database(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db('pointsixtyfive');
  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;