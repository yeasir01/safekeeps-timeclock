// eslint-disable-next-line no-unused-vars
module.exports = (err, req, res, next) => {
    console.error(err);
    res.status(500).json({success: false, message: err.message});
};