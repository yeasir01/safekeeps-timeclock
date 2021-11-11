const { findOneCompany, createOneCompany, updateOneCompany} = require('../models/company-dao');
const { serializeUrlToken } = require('../helpers/gen-url-token');

module.exports = {
    register: async (req, res, next) => {
        try {
            const user = await findOneCompany({email: req.body.email});

            if (user) {
                return res.status(409).json({
                    success: false, 
                    message: 'An account with that email already exsits.'
                });
            }
    
            const doc = await createOneCompany(req.body);

            return res.status(201).json({
                success: true, 
                message: 'Account created',
                id: doc._id,
            });

        } catch (err) {
           next(err);
        }
    },
    login: async (req, res, next) => {
        try {
            res.status(200).json({welcome: req.user});
        } catch (err) {
            next(err);
        }
    },
    logout: (req, res) => {
        req.logout();
        res.status(200).json({ success: true });
    },
    forgot: async (req, res, next) => {
        try {
            const user = await findOneCompany({ email: req.body.email }, [], { lean: false });
            
            if (!user) {
                return res.status(404).json({
                    success: false, 
                    message: `${req.body.email} does not exsits.`
                });
            }

            const token = await serializeUrlToken();

            user.reset_token = token;
            await user.save();

            return res.status(200).json({
                success: true, 
                message: 'A reset link has been sent to your email.',
                token,
            });

        } catch (err) {
            next(err);
        }
    },
    editProfile: async (req, res, next) => {
        try {

            const profile = await updateOneCompany({_id: req.user._id}, req.body);

            return res.status(200).json({
                success: true,
                profile,
            });

        } catch (err) {
            next(err);
        }
    },
    getProfile: async (req, res, next) => {
        try {
            const userData = await findOneCompany({_id: req.user._id}, ['first_name', 'last_name', 'company_name']);

            return res.status(200).json({
                success: true,
                data: userData,
            });

        } catch (err) {
            next(err);
        }
    },
};