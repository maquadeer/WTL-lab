var express = require('express');

var router = express.Router();

router.get('/', (req,res)=> {
    res.send('Login Page');
});

router.post('/', (req,res)=> {
    res.send('Login Page');
});

module.exports = router;

