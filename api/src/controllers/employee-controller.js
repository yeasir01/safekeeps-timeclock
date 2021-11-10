const User = require('../models/company-dao');

module.exports = {
    createOne: async (req, res, next) => {
        try {

            const FILTER = {
                '_id': req.user._id,
            };

            const UPDATE = {
                '$push': {
                    'employees': req.body,
                }
            };

            const OPTIONS = {
                returnDocument: 'after',
                lean: true,
            };

            const doc = await User.findOneAndUpdate(FILTER, UPDATE, OPTIONS);

            if (doc) {
                return res.status(201).json({
                    success: true,
                    data: doc.employees,
                });
            }

            throw Error('Invalid token id. Unable to create record.');

        } catch (err) {
            next(err);
        }
    },
    updateOne: async (req, res, next) => {
        try {

            const FILTER = {
                '_id': req.user._id,
                'employees._id': req.params._id,
            };

            const UPDATE = {
                '$set': {
                    'employees.$.first_name': req.body.first_name,
                    'employees.$.last_name': req.body.last_name,
                    'employees.$.email': req.body.email,
                    'employees.$.pin': req.body.pin,
                    'employees.$.start_date': req.body.start_date,
                    'employees.$.end_date': req.body.end_date,
                    'employees.$.employee_id': req.body.employee_id,
                    'employees.$.group_id': req.body.group_id,
                }
            };

            const OPTIONS = {
                returnDocument: 'after',
                lean: true,
            };

            const doc = await User.findOneAndUpdate(FILTER, UPDATE, OPTIONS);

            if (doc) {
                const idx = doc.employees.findIndex((x) => x._id == req.body._id);

                return res.status(201).json({
                    success: true,
                    data: doc.employees[idx],
                });
            }

            throw Error('Invalid token or employee ID');

        } catch (err) {
            next(err);
        }
    },
    getOne: async (req, res, next) => {
        try {

            const QUERY = {
                '_id': req.user._id,
                'users.employees': req.params._id
            };

            const doc = await User.findOne(QUERY).select('+employees.pin');

            if (doc) {
                const index = doc.employees.findIndex((x) => x._id == req.params._id);

                return res.status(200).json({
                    success: true,
                    data: doc.employees[index],
                });
            }

            throw Error('Here You Go.');

        } catch (err) {
            next(err);
        }
    },
    deleteOne: async (req, res, next) => {
        try {

            const FILTER = {
                '_id': req.user._id
            };

            const UPDATE = {
                '$pull': {
                    'employees': {
                        '_id': req.params._id
                    }
                }
            };

            const OPTIONS = {
                returnDocument: 'after',
                lean: true,
            };

            const doc = await User.findOneAndUpdate(FILTER, UPDATE, OPTIONS);

            if (doc) {
                return res.status(200).json({
                    success: true,
                    message: 'The employee record was deleted',
                });
            }

            throw Error('Here You Go.');

        } catch (err) {
            next(err);
        }
    },
};