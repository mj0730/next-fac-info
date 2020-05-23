import nextConnect from 'next-connect';
import middleware from '../../middleware/connection';

const app = nextConnect();

app.use(middleware);

app.get(async (req, res) => {
    let doc = await req.db.collection('facilitydata').findOne()
    console.log(doc);
    res.json(doc);
});

export default app;