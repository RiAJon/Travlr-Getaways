const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // register model 
//const Model = mongoose.model('trips');

// GET: /trips - lists all trips
const tripsList = async(req, res) => {
    const q = await Trip
        .find({}) // no filter, return all records
        .exec();
    
        // uncomment following lines to show query results in console
        // console.log(q);

    if ( !q) {
        return res // database returned no data 
            .status(404)
            .json({error: 'No data found'});

    } else {
        return res // return resulting trips list
            .status(200)
            .json(q)
    }
};

// POST: /trips - adds new trip
const tripsAddTrip = async(req, res) => {

    const newTrip = new Trip({
        code: req.body.code, 
        name: req.body.name, 
        length: req.body.length, 
        start: req.body.start, 
        resort: req.body.resort, 
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
    });

    const q = await newTrip.save();

    if ( !q) {
        return res // database returned no data 
            .status(404)
            .json({error: 'No data found'});

    } else {
        return res // return new trip 
            .status(200)
            .json(q)
    }

}

// PUT: /trips/:tripCode - Updates Trip
const tripsUpdateTrip = async(req, res) => {

    // Uncomment for debugging
    //console.log(req.params);
    //console.log(req.body);

    // solution to data persistance issue 
    const updateData =  {
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
    };
    delete updateData._id;
        
    const updatedTrip = await Trip
    .findOneAndUpdate(
        { 'code' : req.params.tripCode },
        updateData,
    )
    .exec();
    
    if(!updatedTrip)
    { // Database returned no data
        return res
            .status(400)
            .json({error: 'No data found'});
    } else { // Return resulting updated trip
        return res
            .status(201)
            .json(updatedTrip);
    }

    // Uncomment the following line to show results of operation
    // on the console
    // console.log(q);
};

// GET: /trips/:tripCode - lists a single trip 
const tripsFindByCode = async(req, res) => {
    const q = await Trip
        .find({'code': req.params.tripCode }) // return single record 
        .exec();
    
        // uncomment following lines to show query results in console
        // console.log(q);

    if ( !q) {
        return res // database returned no data 
            .status(404)
            .json({error: 'No data found'});

    } else {
        return res // return resulting trips list
            .status(200)
            .json(q)
    }
};

module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip, 
    tripsUpdateTrip
}
