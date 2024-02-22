const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountTokenSchema = new Schema({
    walletAddress: {
        type: String,
        required: true
    },
    tokenBalance: {
        type: Number,
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

module.exports = mongoose.model('accountToken', accountTokenSchema)