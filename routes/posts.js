const express = require('express');
const post = require('../models/post');
const router = express.Router();

/////get all post 

router.get('/' , async (req, res) => {
    try{
        const posts = await post.find()
        res.json(posts);
    }catch(err){
        res.status(500).json({message: err.message});
    }

})



///select one post
router.get('/:id' , getPost, async (req, res) => {
    res.send(res.posts);

})
////add the post
router.post('/' , async (req, res) => {
    const posts = new post({
        name:req.body.name,
        email:req.body.email,
        phoneno:req.body.phoneno,
        continuity:req.body.continuity,
        uptime:req.body.uptime,
        tptime:req.body.tptime


    });

    try{
        const newPost = await posts.save();
        res.status(201).json(newPost);
    }catch(err){
        res.status(400).json({message:err.message});
    }
});





////delete the post
router.delete('/:id' , getPost, async (req, res) => {
    try{
        await res.posts.remove();
        res.json({message:"deleted that post"});
    }catch(err){
        res.status(500).json({message:err.message});
    }
})
////update the post
router.patch('/:id' ,getPost, async (req, res) => {
    if(req.body.name != null){
        res.posts.name = req.body.name;
    }
    if(req.body.email != null){ 
        res.posts.email = req.body.email;
    }

    try{
        const updatedPost = await res.posts.save()
        res.json(updatedPost)
    }catch(err){
        res.status(400).json({message:err.message})
    }

});


async function getPost(req, res, next) {
    let Posts;
    try{
        posts = await post.findById(req.params.id)
        if(posts == null){
            return res.status(404).json({message: "cannot find post"})
        }
    }catch(err){
        return res.status(500).json({message:err.message})
    }
    res.posts = posts;
    next();
}


module.exports = router;