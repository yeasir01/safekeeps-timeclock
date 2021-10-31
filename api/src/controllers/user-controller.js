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
    
            await new User(req.body).save();

            res.status(201).json({
                success: true, 
                message: 'Account created'
            });

        } catch (err) {
           next(err);
        }
    },
    login: async (req, res, next) => {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ email }).select('+password');
            const isPassword = await comparePassword(password, user.password);

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

            if (!isPassword) {
                return res.status(403).json({
                    success: false,
                    message: 'Invalid credientials.'
                });
            }

            return res.status(200).json({
                success: true,
                message: 'Welcome ' + user.first_name
            });

        } catch (err) {
            next(err);
        }
    },
    forgot: async (req, res, next) => {
        try {
            const { email } = req.body;
            const user = await User.findOne({ email });
            const expiry = 60 * 60;
            
            if (!user) {
                return res.status(404).json({
                    success: false, 
                    message: `${email} was not found.`
                });
            }

            const token = await serializeUrlToken(40, expiry);

            user.reset_token = token;
            user.save();

            return res.status(200).json({
                success: true, 
                message: 'Please check your email for the reset link.'
            });

        } catch (err) {
            next(err);
        }
    },
};