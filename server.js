var express = require('express');
var bodyParser = require('body-parser');
var assert = require('assert');
var mongo = require('mongodb').MongoClient;
var app = express();
var url = "mongodb://username:password@ds115340.mlab.com:15340/userlist";
var port = 5000;
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/submit', (req, res) => {
	var item = {
		item: req.body.item,
		price: req.body.price,
		type: req.body.type,
		expiration: req.body.expiration
	}
	mongo.connect(url, (err, db) => {
		assert.equal(null, err);
		db.collection('item-data').insertOne(item, function(err, result) {
        assert.equal(null, err);
        db.close();
      });
	});
	res.redirect('/');
});

app.listen(port, () => {
	console.log("Server listening on port " + port + "...");
});
