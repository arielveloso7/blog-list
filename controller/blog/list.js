import blogDAO from '../../model/blog/dao.js';

const list = async (req, res) => {
    try {
        const blogs = await blogDAO.list();
        res.json(blogs);

    } catch (err) {
        console.log('Error' + err)
    }
}

export default list;