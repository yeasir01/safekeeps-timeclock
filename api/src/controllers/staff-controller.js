const Staff = require('../models/Staff');

module.exports = {
    createOne: async (req, res, next) => {
        try {
            const staffMember = Staff.findOne({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
            }).exec();

            if (staffMember){
                return res.status(406).json({
                    success: false, 
                    message: 'That staff member already exsits, please use edit instead.'
                });
            }

            const doc = await new Staff(req.body).save();

            return res.status(201).json({
                success: true,
                id: doc._id,
            });

        } catch (err) {
            next(err);
        }
    },
    updateOne: async (req, res, next) => {
        try {
            const query = {_id: req.params._id};
            const data = req.body;
            const options = {lean: true, returnDocument: 'after'};

            const staffMember = Staff.findOneAndUpdate(query, data, options).exec();

            return res.status(201).json({
                success: true,
                id: staffMember._id,
            });
        } catch (err) {
            next(err);
        }
    },
    getOne: async (req, res, next) => {
        try {

        } catch (err) {
            next(err);
        }
    },
    deleteOne: async (req, res, next) => {
        try {


        } catch (err) {
            next(err);
        }
    },
};