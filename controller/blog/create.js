import blogDAO from '../../model/blog/dao.js';

const create = async (req, res) => {

    try {
        await blogDAO.create(req.body);
        res.json(req.body);

    } catch (err) {
        console.log(err);
    }
}

export default create;
