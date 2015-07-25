var express = require('express');
var app = express();
var bodyParser = require('body-parser');

global.config = require('../mongodb_config.json');
global.appRoot = require('app-root-path');
global.mongodb = require('mongodb');

global.db;
global.collection;

//app.use();
var index = require('./route/index');
var poi = require('./route/poi');
var poi_type = require('./route/poi_type');
var poi_subtype = require('./route/poi_subtype');
var review = require('./route/review');
var user = require('./route/user');
var staff = require('./route/staff');
var role = require('./route/role');
var province = require('./route/province');
var district = require('./route/district');
var subdistrict = require('./route/subdistrict');

//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/', index);
app.use('/poi', poi);
app.use('/poi_type', poi_type);
app.use('/poi_subtype', poi_subtype);
app.use('/user', user);
app.use('/staff', staff);
app.use('/review', review);
app.use('/role', role);
app.use('/province', province);
app.use('/district', district);
app.use('/subdistrict', subdistrict);

app.listen(config.nodejs_port, function () {
	//console.log("Start server port " + config.nodejs_port + " is OK...");
});

mongodb.MongoClient.connect(config.connection_url + config.collection_name, function (err, database) {
    if (err) throw err;

    db = database;
});

process.on('uncaughtException', function (err) {
    console.log(err);
}); 

module.exports = app;