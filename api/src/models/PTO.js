const { Schema, model, Types } = require('mongoose');

const PTOSchema = new Schema({
    staff_id: {
        type: Types.ObjectId(),
        required: true,
    },
    pto_code: {
        type: String,
        required: true,
    },
    hours: {
        type: String,
        required: true,
    },
    minutes: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
    strict: true
});

module.exports = model('PTO', PTOSchema);