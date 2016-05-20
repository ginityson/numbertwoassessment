var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/mu';

router.get('/', function (req, res) {
  pg.connect(connectionString, function (err, client, done){
    if (err) {
      res.sendStatus(500);
    }
    client.query('SELECT * FROM zoo', function (err, result) {
      done();
      console.log(res.rows);
      res.send(result.rows);
    });
  });
});

router.post('/', function (req, res) {
  var employee = req.body;

  pg.connect(connectionString, function (err, client, done){
    if (err) {
      res.sendStatus(500);
    }
    client.query('INSERT INTO zoo (animal_type, animal_inventory, animal_id)'+
        'VALUES ($1,$2,$3)',
        [zoo.animal_type, zoo.animal_inventory, zoo.animal_id,],
        function (err, result) {
          done();

          if (err) {
            res.sendStatus(500);
            return;
          }
          res.sendStatus(201);
        });
      });
    });

      module.exports = router;
