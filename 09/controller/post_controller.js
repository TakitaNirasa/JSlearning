const db = require('../db')

class PostController {
    async createPost(req, res)
    {
        const { title, surname, userId } = req.body;
        const newPost = await db.query('INSERT INTO post (title, surname, userId) values {$1, $2, $3} RETURNING *', [title, surname, userId]);
        res.json(newPost.rows[0]);
    }
    async getPostsByUser(req, res)
    {

    }
}


module.exports = new PostController();