const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // register model 
const Model = mongoose.model('trips');

// GET: /trips - lists all trips
const tripsList = async(req, res) => {
    const q = await Model
        .find({}) // no filter, return all records
        .exec();
    
        // uncomment following lines to show query results in console
        // console.log(q);

    if ( !q) {
        return res // database returned no data 
            .status(404)
            .json(err);

    } else {
        return res // return resulting trips list
            .status(200)
            .json(q)
    }
};

// GET: /trips/:tripCode - lists a single trip 
const tripsFindByCode = async(req, res) => {
    const q = await Model
        .find({'code': req.params.tripCode }) // return single record 
        .exec();
    
        // uncomment following lines to show query results in console
        // console.log(q);

    if ( !q) {
        return res // database returned no data 
            .status(404)
            .json(err);

    } else {
        return res // return resulting trips list
            .status(200)
            .json(q)
    }
};

module.exports = {
    tripsList,
    tripsFindByCode
}
