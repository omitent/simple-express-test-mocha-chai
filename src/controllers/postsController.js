const db = require('../../database/models/posts')

exports.findAllPosts = function (req, res) {
    db.findAll().then((posts) => {
        res.status(200).json(posts);
    })
}

exports.findPostById = async function (req, res) {
    const post_id = await db.findByPk(req.params.id);

    if (!post_id) {
        res.status(404).json({ message: 'Postagem não existe!' });
    } else {
        db.findByPk(req.params.id).then((posts) => {
            res.status(200).json(posts);
        })
    }
}

exports.createPost = function (req, res) {
    db.create({ titulo: req.body.titulo, descricao: req.body.descricao, conteudo: req.body.conteudo }).then(() => {
        res.status(200).json({ message: 'Postagem criado com sucesso' });
    }).catch(() => {
        res.status(400).json({ error: 'Erro ao criar postagem' })
    })
}

exports.updatePost = async function (req, res) {
    const post_id = await db.findByPk(req.params.id);

    if (!post_id) {
        res.status(404).json({ message: 'Postagem não existe!' });
    } else {
        db.update({ titulo: req.body.titulo, descricao: req.body.descricao, conteudo: req.body.conteudo }, { where: { 'id': req.params.id } }).then(() => {
            res.status(200).json({message: 'atualizado com sucesso'})
        })
    }
}

exports.deletePost = async function (req, res) {
    const post_id = await db.findByPk(req.params.id);

    if (!post_id) {
        res.status(404).json({ message: 'Postagem não existe!' });
    } else {
        db.destroy({ where: { 'id': req.params.id } }).then(() => {
            res.status(200).json({ message: 'Postagem deletado com sucesso' });
        })
    }
}