var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/' , function (req, res) {
    res.sendFile(appRoot + '/service/mongodb/view/schema.html');
});
module.exports = router;