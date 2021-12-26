const router = require("express").Router();
const { Post } = require("../models");
const auth = require("../public/javascript/auth"); 

router.get("/", auth, (req, res) => {
    Post.findAll({
        where: {
            user_id: req.session.user_id
        }
    }).then(dbPostData => {
        const posts = dbPostData.map((post) => post.get({ plain:true }));

        res.render("admin", {layout:"admin", posts})
    }).catch(err => {
        console.log(err, req.session.user_id)
    })
});

router.get("/new", auth, (req, res) => {
    res.render("new-post", {layout:"admin"})
});

router.get("/edit/:id", auth, (req, res) => {
    Post.findByPk(req.params.id).then(dbPostData => {
        if(dbPostData) {
            const post = dbPostData.get({ plain:true })
            res.render("edit-post", {layout:"admin", post})
        } else{
            res.status(404).end()
        }
    }).catch(err => {
        res.status(500).json(err)
    })
});

module.exports = router;