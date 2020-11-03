import { connectToDatabase } from '../../utils/mongodb';

export default async function handler(req, res) {
  const data = await getDataFromDatabase();

  if (req.method === 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data));
  } else {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Error: Only GET requests are allowed.');
  }
}

export async function getDataFromDatabase() {
  const { db } = await connectToDatabase();
  const result = await db.collection('pptdata').find().project({ _id: 0 }).toArray();

  const data = {};
  result.forEach((x) => (data[x['Facility ID']] = x));

  const payResult = await db.collection('pay').find().project({ _id: 0 }).toArray();

  const payScaleData = {};
  payResult.forEach((x) => {
    payScaleData[x['fac_id']] = x;
  });

  const infoResult = await db.collection('facilitydata').find().project({ _id: 0 }).toArray();
  const infoData = {};
  infoResult.forEach((x) => (infoData[x['facId']] = x));

  for (let key in data) {
    Object.assign(data[key], infoData[key]);
    delete data[key]['facId'];
  }

  return { data, payScaleData };
}
