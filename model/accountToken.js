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
    },
    transactionHistory: {
        deposit: {
            date:{
                type: Date,
                required: true
            },
            amount:{
                type: Number,
                required: true
            }
        },
        withdrawal: {
            date:{
                type: Date,
                required: true
            },
            amount:{
                type: Number,
                required: true
            }
        }
    }
});

module.exports = mongoose.model('accountToken', accountTokenSchemna)