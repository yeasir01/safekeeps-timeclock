const { Schema, model, Types } = require('mongoose');

const GroupsSchema = new Schema({
    account_id: {
        type: Types.ObjectId(),
        ref: 'Account',
        required: true,
    },
    group_name: {
        type: String,
        required: true,
    },
    supervisor: {
        type: Types.ObjectId(),
        required: false,
    },
    staff_id: [{
        type: Types.ObjectId(),
        ref: 'Staff',
    }],
    note: {
        type: String,
        required: false,
    },
}, {
    timestamps: true,
    strict: true
});

module.exports = model('Groups', GroupsSchema);