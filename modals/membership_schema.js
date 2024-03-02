const mongo = require('mongoose');

const memberschema = new mongo.Schema({
    userid: {
        type: mongo.Schema.Types.ObjectId,
        ref: 'user',
    },
    planid: {
        type: mongo.Schema.Types.ObjectId,
        ref: 'plan',
    },
    txn_no: {
        type: String,
        required: true
    },
    buy_date: {
        type: String,
        required: true
    },
    expire_date: {
        type: String,
        required: true
    },
    coupon: {
        type: String,
        default:'',
        required: false
    },
    tournament_no: {
        type: Number,
        required: false,
        default:10000
    },
    finalpricepaid: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const membership = new mongo.model("membership", memberschema);
module.exports = membership;
