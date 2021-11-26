const LocalStrategy = require('passport-local');
const { comparePassword } = require('../helpers/compare-password');
const Account = require('../models/Account');

const LS_OPTS = {
  usernameField: 'email',
  passwordField: 'password',
};

const INCLUDE = [
  '_id',
  'first_name',
  'last_name',
  'email',
  'password',
  'blocked',
  'last_login',
];

module.exports = (passport) => {
  passport.use(new LocalStrategy(LS_OPTS, async (email, password, done) => {
    try {
      const user = await Account.findOne({ email }, INCLUDE).exec();
      if (!user) { return done({ message: 'Invalid login credentials.' }, false); }
      if (!await comparePassword(password, user.password)) { return done({ message: 'Invalid login credentials.' }, false); }
      if (user.blocked) { return done({ message: 'This account has been blocked.' }, false); }
      user.last_login = Date.now();
      await user.save();
      return done(null, user);
    } catch (err) {
      done(err);
    }
  }));

  passport.serializeUser(function (user, cb) {
    process.nextTick(function () {
      cb(null, { _id: user._id, email: user.email });
    });
  });

  passport.deserializeUser(function (user, cb) {
    process.nextTick(function () {
      return cb(null, user);
    });
  });
};