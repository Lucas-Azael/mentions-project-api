const express = require('express');
const router = express.Router();

//Criando response da primeira rota
router.get('/', (req, res, next) => {
    res.status(200).send({
        title: 'MentionsApi',
        version: '1.0.0'
    });
});

module.exports = router;