var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

module.exports.reviewsCreate = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};

module.exports.reviewsReadOne = function (req, res) {
    var message, review;
    if(req.params && req.params.locationid && req.params.reviewid){
        Loc.findById(req.params.locationid).select('name reviews').exec(function(err, location){
            if(!location){
                message = "Could not find a location with a locationid of " + req.params.locationid + ".";
                console.log("REQUEST ERROR:", message);
                sendJsonResponse(res, 404, { "message": message});
                return;
            }else if (err){
                console.log("REQUEST ERROR:", err);
                sendJsonResponse(res, 404, err);
                return;
            }
            if(location.reviews && location.reviews.length > 0){
                var id = mongoose.Types.ObjectId(req.params.reviewid);
                review = location.reviews.id(id);
                if(!review){
                    message = "The requested review with a reviewid of " + req.params.reviewid + " was not found.";
                    console.log("REQUEST ERROR:", req.params);
                    sendJsonResponse(res, 404, { "message": message});
                }else{
                    var responseJSON = {
                        "location": {
                            "name": location.name,
                            "_id": req.params.locationid
                        },
                        "review": review
                    };
                    sendJsonResponse(res, 200, responseJSON);
                }
            }else{
                message = "Invalid request. No reviews were found for location." + req.params.locationid;
                console.log("REQUEST ERROR:", message);
                sendJsonResponse(res, 404, { "message": message});
            }
        });
    }else{
        message = "Invalid request. The locationid and reviewid parameters are both required.";
        console.log("REQUEST ERROR:", message);
        sendJsonResponse(res, 404, { "message": message});
    }
};

module.exports.reviewsUpdateOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};

module.exports.reviewsDeleteOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};

var sendJsonResponse = function(res, status, content){
    res.status(status);
    res.json(content);
};