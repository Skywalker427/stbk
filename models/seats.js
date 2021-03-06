const mg = require('mongoose');
const Schema = mg.Schema, ObjectId = Schema.ObjectId;

const seatsSchema = new Schema({
    seatNumber: String, 
    status: Boolean, 
    createdBy: ObjectId, 
    createdOn: String, 
    updatedBy: ObjectId, 
    updatedOn: String, 
    isActivated: Boolean, 
    isDeleted: Boolean
});

seatsSchema.set('versionKey', false);
module.exports = mg.model('Seats', seatsSchema);