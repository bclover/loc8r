module.exports.homeList = function(req, res){
    var homeListContent = {
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
        ],
        sidebar: "Looking for WiFi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, donuts, or a pint? Let Loc8r help you find the place you're looking for!"
    };
    res.render('locations-list', homeListContent);
};

module.exports.locationInfo = function(req, res){
    var locationInfoContent = {
        title: 'Loc8r',
        pageHeader: {
            title: 'Starbucks'
        },
        location: {
            name: 'Starbucks',
            address: '8101 Fayetteville Rd, Fuquay Varina, NC 27526',
            rating: 4,
            facilities: [
                'Hot Drinks',
                'Food',
                'Premium WiFi'
            ],
            coords: {
                latitude: 35.663300,
                longitude: -78.6995
            },
            openingTimes: [
                {
                    days: 'Monday - Friday',
                    opening: '7:00am',
                    closing: '7:00pm',
                    closed: false
                },
                {
                    days: 'Saturday',
                    opening: '8:00am',
                    closing: '5:00pm',
                    closed: false
                },
                {
                    days: 'Sunday',
                    closed: true
                }
            ],
            reviews: [
                {
                    author: 'Bryan Clover',
                    rating: 5,
                    timestamp: '02 August 2016',
                    reviewText: 'What a hip place! Really a mellow and productive place to work!'
                },
                {
                    author: 'Simon Holmes',
                    rating: 4,
                    timestamp: '06 August 2016',
                    reviewText: 'It was a decent place. Coffee was cold, but te WiFi was rocking!'
                }
            ]
        },
        sidebar: {
            context: ' is on Loc8r because it has accessible WiFi and space to sit down with your laptop and get some work done.',
            callToAction: "If you've been and you like it - or if you don't - please leave a review to help other people just like you."
        }
    };
    res.render('locations-info', locationInfoContent);
};

module.exports.addReview = function(req, res){
    var addReviewContent = {
        title: "Loc8r",
        pageHeader: {
            title: "Review Starbucks"
        }
    };
    res.render('locations-review-form', addReviewContent);
};