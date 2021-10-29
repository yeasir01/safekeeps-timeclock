// eslint-disable-next-line no-unused-vars
module.exports = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({success: false, message: 'Somthing went wrong, please try again later'});
};