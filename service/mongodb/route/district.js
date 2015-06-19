var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.sendFile(appRoot + '/app/index.html');
});

router.get('/LoadDistrictByProvinceId/:ProvinceId', function (req, res) {
    console.log('district.js');
    var ProvinceId = req.params.ProvinceId;
    var BSON = mongodb.BSONPure;
    var o_id = new BSON.ObjectID(ProvinceId.toString());
    db.collection(DB.COLLECTION_DISTRICT)
        .find({
            "$query":{'ProvinceId' : o_id}, "$orderby":{ "District": 1 }
        })
        .toArray(function (err, districts) {
            res.json(districts);
        });
});

module.exports = router;