const mongoose = require('mongoose');

var loginid = mongoose.model('loginuser',{

    company_name: {
        type: String,
        required: true
    },
    password: {
        type: String
    }
});

module.exports = {loginid}