const Router = require('express')
const router = new Router()
const postController = require ('../controller/post_controller')

router.post('/post', postController.createPost)
router.get('/post', postController.getPostsByUser)

module.exports = router