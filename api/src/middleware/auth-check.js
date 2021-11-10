module.exports.isAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    return res.status(403).json({
        sucess: false,
        message: 'You are not authorized to perform that action.'
    });
};