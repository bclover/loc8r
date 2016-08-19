var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

module.exports.locationsListByDistance = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};

module.exports.locationsCreate = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};

module.exports.locationsReadOne = function (req, res) {
    var message;
    if(req.params && req.params.locationid){
        Loc.findById(req.params.locationid).exec(function(err, location){
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
            sendJsonResponse(res, 200, location);
        });
    }else{
        message = "Invalid request. No locationid was specified.";
        console.log("REQUEST ERROR:", message);
        sendJsonResponse(res, 404, { "message": message});
    }
};

module.exports.locationsUpdateOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};

module.exports.locationsDeleteOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};

var sendJsonResponse = function(res, status, content){
    res.status(status);
    res.json(content);
};