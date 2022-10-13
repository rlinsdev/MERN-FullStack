const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
	res.json({msg: "Get all"});
});

router.get('/:id', (req, res) => {
	res.json({msg: "Get Single"});
});

router.post('/', (req, res) => {
	res.json({msg: "Post Single"});
});

router.delete('/:id', (req, res) => {
	res.json({msg: "DElete Single"});
});

router.patch('/:id', (req, res) => {
	res.json({msg: "Patch Single"});
});


module.exports = router;
