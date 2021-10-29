module.exports = (schema) => async (req, res, next) => {
    try {
      await schema.validate({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      return next();
    } catch (err) {
      res.status(400).json({ success: false, path: err.path, message: err.message });
    }
  };