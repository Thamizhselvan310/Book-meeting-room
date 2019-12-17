const mongoose = require('mongoose');

var meetingSchema = mongoose.model('roombooks',{

    company_name: {
        type: String,
        required: true
    },
    start_time:{
        type: Number
    },
    end_time:{
        type: Number
    },
    date:{
        type: Date
    },
    reason: {
        type: String
    },
});

module.exports = {meetingSchema};