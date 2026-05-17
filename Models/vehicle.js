const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({

    vehicleNumber: {
        type: String,
        required: true
    },

    vehicleType: {
        type: String,
        required: true
    },

    entryDate: {
        type: String,
        required: true
    },

    entryTime: {
        type: String,
        required: true
    },

    tollAmount: {
        type: Number,
        required: true
    }

});

module.exports =
    mongoose.model("Vehicle", vehicleSchema);