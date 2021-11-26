const Account = require('../models/Account');
const { serializeUrlToken } = require('../helpers/url-token');

module.exports = {
    register: async (req, res, next) => {
        try {
            const account = await Account.findOne({email: req.body.email}).lean().exec();

            if (account) {
                return res.status(409).json({
                    success: false, 
                    message: 'An account with that email already exsits.'
                });
            }
            
            const doc = await new Account(req.body).save();

            return res.status(201).json({
                success: true,
                id: doc._id,
            });

        } catch (err) {
           next(err);
        }
    },
    logout: (req, res) => {
        req.logout();
        res.status(200).json({ success: true });
    },
    login: async (req, res) => {
        res.status(200).json({ success: true });
    },
    forgot: async (req, res, next) => {
        try {
            const account = await Account.findOne({ email: req.body.email }).exec();
            
            if (!account) {
                return res.status(404).json({
                    success: false, 
                    message: `${req.body.email} does not exsits.`
                });
            }

            const token = await serializeUrlToken(7200, 40);

            account.reset_token = token;
            await account.save();
            //send email here
            return res.status(200).json({
                success: true, 
                message: 'A reset link has been sent to your email.'
            });

        } catch (err) {
            next(err);
        }
    },
    editProfile: async (req, res, next) => {
        try {
            const query = {
                _id: req.user._id
            };
            
            const data = req.body;
            
            const options = {
                returnDocument: 'after'
            };

            const profile = await Account.findOneAndUpdate(query, data, options).lean().exec();

            return res.status(200).json({
                success: true,
                user: profile,
            });

        } catch (err) {
            next(err);
        }
    },
    getProfile: async (req, res, next) => {
        try {
            const query = {
                _id: req.user._id
            };

            const select = [
                'first_name', 
                'last_name', 
                'company_name'
            ];

            const userData = await Account.findOne(query, select).lean().exec();

            return res.status(200).json({
                success: true,
                data: userData,
            });

        } catch (err) {
            next(err);
        }
    },
};