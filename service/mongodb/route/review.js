var express = require('express');
var router = express.Router();

router.get('/LoadReview', function(req, res){
	db.collection('Review')
        .find({})
        .toArray(function (err, reviews) {
            if (err) {

            } else {
           //     console.log(reviews);
                res.json(reviews);
            }
        });
});

router.get('/LoadReviewByPoiId/:PoiId', function(req, res) {
    db.collection('Review')
        .find({})
        .toArray(function (err, reviews) {
            if (err) {

            } else {
                console.log(reviews);
                res.json(reviews);
            }
        });
});

router.get('/LoadReviewByReviewId/:ReviewId', function(req, res) {
    var ReviewId = req.params.ReviewId;
    var o_id = bson.BSONPure.ObjectID(ReviewId.toString());

    db.collection('Review')
        .findOne({
            '_id': o_id
        }, function (err, review) {
            if (err) {
                console.log(err);
                res.sendStatus(500);
                return;
            } else if (!review) {
                res.sendStatus(404);
                return;
            } else if (review){
                res.json(review);
            }
        });
});
// Create Review
router.post('/CreateReview', function (req, res, next) {
    var Review = req.body;
    console.log('create review ', Review);
    var createDate = new Date ();
    createDate.setHours ( createDate.getHours() + 7 );// GMT Bangkok +7
    Review.CreateDate = createDate;
    Review.UpdateDate = createDate;
    db.collection('Review')
        .insert(Review, function (err, result) {
            if (err) {

            } else {
                console.log(result);
            }

        //    console.log("Insert poi sub type success ?? " + result[0]._id);
        });
});


// Update Review
router.get('/UpdateReview', function (req, res, next) {
    var Review = req.body;
    console.log('update review ', Review);
    var id = Review._id;
    var o_id = bson.BSONPure.ObjectID(id.toString());
    var updateDate = new Date ();
    updateDate.setHours ( updateDate.getHours() + 7 );// GMT Bangkok +7
    Review.UpdateDate = updateDate;
    db.collection('Review')
        .update({
                '_id': o_id
            }, 
            Review
            , function (error, result) {
                if (error)
                    throw error
                console.log("update review success ?? " , result);
            });
});

router.get('/DeleteReview/:ReviewId', function(req, res) {
    var ReviewId = req.params.ReviewId;
    console.log('delete Review ' + ReviewId);
    var o_id = bson.BSONPure.ObjectID(ReviewId.toString());
    db.collection(config.mongodb.review.name)
        .remove({
            _id: o_id
        }, function (error, result) {
            if (error) throw error
            console.log('success ');
            res.json(result);
        });
});
module.exports = router;