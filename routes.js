const express = require('express');

const router = express.Router();

router.get('/bio', (req, res) => {
    res.send('Bio');
    res.render('margot')
   });

   router.get('/contact', (req, res) => {
    res.send('Contact');
   });

module.exports = router;
