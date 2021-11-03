const User = require('../models/Users');
const { comparePassword } = require('../helpers/compare-password');
const { serializeUrlToken } = require('../helpers/gen-url-token');

module.exports = {
    register: async (req, res, next) => {
        try {
            const user = await User.findOne({email: req.body.email});

            if (user) {
                return res.status(409).json({
                    success: false, 
                    message: 'An account with that email already exsits.'
                });
            }
    
            const doc = await new User(req.body).save();

            res.status(201).json({
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
            const { email, password } = req.body;
            const user = await User.findOne({ email }).select('+password');
            
            if (!user) {
                return res.status(403).json({
                    success: false, 
                    message: 'Invalid credentials.'
                });
            }
            
            if (user.blocked) {
                return res.status(403).json({
                    success: false, 
                    message: 'This account has been blocked, please contact support.'
                });
            }
            
            const isPassword = await comparePassword(password, user.password);
            
            if (isPassword) {
                return res.status(200).json({
                    success: true,
                    message: 'Welcome ' + user.first_name
                });
            }

            return res.status(403).json({
                success: false,
                message: 'Invalid credientials.'
            });

        } catch (err) {
            next(err);
        }
    },
    forgot: async (req, res, next) => {
        try {
            const { email } = req.body;
            const user = await User.findOne({ email });
            
            if (!user) {
                return res.status(404).json({
                    success: false, 
                    message: `${email} was not found.`
                });
            }

            const token = await serializeUrlToken();

            user.reset_token = token;
            await user.save();

            return res.status(200).json({
                success: true, 
                message: 'Please check your email for the reset link.',
                token,
            });

        } catch (err) {
            next(err);
        }
    },
};