const { Schema, model } = require('mongoose');

const TimeClockSchema = new Schema({
    clock_in: {
        type: Date,
        required: false,
    },
    clock_out: {
        type: Date,
        required: false,
    },
    message: {
        type: String,
        required: false,
    },
}, {
    timestamps: true,
    strict: true
});

module.exports = model('TimeClock', TimeClockSchema);