const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phoneno:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true,
        default: Date.now
    },
    uptime:{
        type: String,
        required: true
    },
    clientUptime:{

    },
    upTimeTrend:{

    },
    tptime:{
        type: String,
        required: true
    },
    upTimeTrend: {

    },
    singleUsersTicketTrend:{
        type:String,
        required: true
    },
    incidents:{
        type: String,
        required: true
    },
    requests:{
        type:String,
        required:true
    },
    slaViolation:{
        type:String,
        required:true
    },
    lam:{
        type:String,
        required:true
    },
    outages:{
        type:String,
        required:true
    }


    
});

module.exports = mongoose.model('postschema', postSchema);