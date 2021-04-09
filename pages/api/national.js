import { getDataFromDatabase } from './data';
import initMiddleware from '../../utils/initMiddleware';
import Cors from 'cors';

const cors = initMiddleware(
  Cors({
    methods: ['GET'],
  })
);

// query parameter in the route is case sensitive

export default async function handler(req, res) {
  await cors(req, res);
  const { data } = await getDataFromDatabase();

  if (req.method === 'GET') {
    if (data.National) {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(data.National));
    } else {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Error: National data not found.');
    }
  } else {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Error: Only GET requests are allowed.');
  }
}
