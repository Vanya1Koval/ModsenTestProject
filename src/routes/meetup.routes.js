const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {return res.status(200).json("Get all");});
router.get('/:userId', (req, res) => {return res.status(200).json("Get one");});
router.post('/', (req, res) => {return res.status(200).json("create");});
router.put('/', (req, res) => {return res.status(200).json("update");});
router.delete('/', (req, res) => {return res.status(200).json("delete");});

module.exports = router;