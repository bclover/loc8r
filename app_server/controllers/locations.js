module.exports.homeList = function(req, res){
    res.render('locations-list', {title: 'Home'});
};

module.exports.locationInfo = function(req, res){
    res.render('locations-info', {title: 'Location Info'});
};

module.exports.addReview = function(req, res){
    res.render('locations-review-form', {title: 'Add Review'});
};