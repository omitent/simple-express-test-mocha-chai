const express = require('express');
const router = express.Router();
const controller = require("../controllers/postsController");

router.get('/', controller.findAllPosts);
router.get('/:id', controller.findPostById);
router.post('/create', controller.createPost);
router.put('/update/:id', controller.updatePost);
router.delete('/delete/:id', controller.deletePost);

module.exports = router;