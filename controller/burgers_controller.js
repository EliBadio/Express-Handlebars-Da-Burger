const express = require('express');
const burger = require('../models/burger');

const router = express.Router();

router.get('/', (req, res) => {
  burger.selectAll(data => {
    let burgerObj = {
      burger: data,
    };
    res.render('index', burgerObj);
  });
});

router.post('/api/burgers', (req, res) => {
  let newValue = req.body.name;
  burger.insertOne(newValue, result => {
    res.json({
      id: result.insertId,
    });
  });
});

router.put('/api/burgers/:id', function (req, res) {
  let condition = `id=${req.params.id}`;

  burger.updateOne('devoured=true', condition, result => {
    if (result.changedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
