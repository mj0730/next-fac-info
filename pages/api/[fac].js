const placeholder = {
  D10: { id: 'D10', name: 'DFW TRACON', level: 12 },
  MAF: { id: 'MAF', name: 'Midland', level: 7 },
};

export default function handler(req, res) {
  if (req.method === 'GET') {
    const {
      query: { id },
    } = req;

    const result = placeholder[id];

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result));
  } else {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Error: Only GET requests are allowed.');
  }
}
