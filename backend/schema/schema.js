const mongoose = require('mongoose');

// define a schema;
const Schema = mongoose.Schema;

const SomeModelSchema = new Schema( {
    name :  String
})
// create model
const MissionModel = mongoose.model('missions', SomeModelSchema);

module.exports = MissionModel;