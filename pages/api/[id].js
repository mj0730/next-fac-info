const placeholder = {
  D10: { id: 'D10', name: 'DFW TRACON', level: 12 },
  MAF: { id: 'MAF', name: 'Midland', level: 7 },
};
// query parameter in the route is case sensitive

export default function handler(req, res) {
  if (req.method === 'GET') {
    const {
      query: { id },
    } = req;

    let result;
    if (placeholder[id]) {
      result = placeholder[id];
    } else {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Error: No ID with that value found.');
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result));
  } else {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Error: Only GET requests are allowed.');
  }
}
