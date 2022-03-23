
const express = require('express');
const router = express.Router();





const users = []


router.get('/users', async (req, res) => {
    res.json(users)
});


module.exports = router;