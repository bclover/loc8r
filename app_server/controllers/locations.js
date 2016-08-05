module.exports.homeList = function(req, res){
    var pageContent = {
        title: 'Loc8r',
        pageHeader: {
            title: 'Loc8r',
            strapline: 'Find place to work with WiFi near you!'
        },
        locations: [
            {
                name: 'Starbucks',
                address: '8101 Fayetteville Rd, Kings Grant Shopping Center, Fuquay Varina, NC 27526',
                rating: 4,
                facilities: [
                    'Hot Drinks',
                    'Food',
                    'Premium WiFi'
                ],
                distance: "3.1 miles"
            },
            {
                name: 'Dunkin Donuts',
                address: '3511 Kildaire Farm Rd, Cary, NC 27518',
                rating: 3,
                facilities: [
                    'Donuts',
                    'Coffee',
                    'WiFi'
                ],
                distance: "5.1 miles"
            },
            {
                name: "McDonald's",
                address: '3494 Kildaire Farm Rd, Cary, NC 27518',
                rating: 5,
                facilities: [
                    'Burgers',
                    'Fries',
                    'Ice Cream',
                    'Premium WiFi'
                ],
                distance: "4.8 miles"
            }
        ]
    };
    res.render('locations-list', pageContent);
};

module.exports.locationInfo = function(req, res){
    res.render('locations-info', {title: 'Location Info'});
};

module.exports.addReview = function(req, res){
    res.render('locations-review-form', {title: 'Add Review'});
};