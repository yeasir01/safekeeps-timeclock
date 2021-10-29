const User = require('../models/Users');

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

            if (!user) {
                return res.status(409).json({
                    success: false, 
                    message: 'Invalid credentials.'
                });
            }

            if (user.blocked) {
                return res.status(409).json({
                    success: false, 
                    message: 'This account has been blocked, please contact support.'
                });
            }

            user.comparePassword(password, (err, isMatch) => {
                if (err) {
                    return res.status(403).json({success: false,});
                }

                if (isMatch) {
                    return res.status(200).json({
                        success: true, 
                        message: 'Welcome' + user.first_name
                    });
                }
                throw new Error('Error thrown in compare password method');
            });

        } catch (err) {
            next(err);
        }
    }
};