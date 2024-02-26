const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mintedItemsSchema = new Schema({
    idNumber: {
        type: String,
        required: true
    },
    itemName: {
        type: String,
        requiree: true
    },
    itemClass: {
        type: String,
        required: true
    },
    itemDesc: {
        type: String
    },
    itemImage: {
        type: Image,
        required: true
    }
});

module.exports = mongoose.model('mintedItems', mintedItemsSchema)