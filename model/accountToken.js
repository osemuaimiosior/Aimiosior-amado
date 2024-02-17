const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountTokenSchemna = new Schema({
    address: {
        type: String,
        required: true
    },
    tokenBalance: {
        tpye: Number,
        required: true
    }
});

module.exports = mongoose.model('accountToken', accountTokenSchemna)