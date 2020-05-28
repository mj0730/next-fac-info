import nextConnect from 'next-connect';
import middleware from '../../middleware/middleware';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    try {
        //let search = req.body
        console.log(req);
        let doc = await req.db.collection("facilitydata").findOne();
        console.log(doc);
        res.status(200).json(doc);
    } catch (error) {
        throw new Error('Error retreiving from the database')
    };
});

export default handler;