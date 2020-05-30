import nextConnect from 'next-connect';
import middleware from '../../middleware/middleware';

const collectionName = 'pptdata';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    try {
        let data = await req.db.collection(collectionName).find().toArray();
        res.status(200).json(data);
    } catch (error) {
        throw new Error('Error retreiving from the database')
    };
});

export default handler;