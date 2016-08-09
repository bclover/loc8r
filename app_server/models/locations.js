var mongoose = require( 'mongoose' );

// Sub schema representing each of the opening times of a location
var openingTimeSchema = new mongoose.Schema({
    days: { type: String, required: true},
    opening: { type: String },
    closing: { type: String },
    closed: { type: Boolean, required: true}
});

// Sub schema representing each review for a location
var reviewSchema = new mongoose.Schema({
    author: { type: String },
    rating: { type: Number, required: true, min: 0, max: 5},
    reviewText: { type: String },
    createdOn: { type: Date, "default": Date.now}
});

// Schema representing each location
var locationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String },
    rating: { type: Number, "default": 0, min: 0, max: 5 },
    facilities: { type: [String] },
    coords: { type: [Number], index: '2dsphere' },
    openingTimes: [openingTimeSchema],
    reviews: [reviewSchema]
});

//create the model from the locationSchema
mongoose.model('Location', locationSchema);