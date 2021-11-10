const LocalStrategy = require('passport-local');
const { verifyPassword } = require('../helpers/verify-password');
const { findOneCompany } = require('../models/company-dao');

const LOCAL_OPT = {
    usernameField: 'email',
    passwordField: 'password',
};

const SELECT = [
  '_id',
  'first_name',
  'email',
  'password',
  'blocked',
];

module.exports = (passport) => {
    passport.use(new LocalStrategy(LOCAL_OPT, async (email, password, done) => {
      try {
        const user = await findOneCompany({email}, SELECT);
        if (!user) { return done({message: 'Invalid Login Credentials.'}, false); }
        if (!await verifyPassword(password, user.password)) { return done({message: 'Invalid Login Credentials.'}, false); }
        if (user.blocked) { return done({message: 'This account has been blocked.'}, false); }
        user.password = undefined;
        user.blocked = undefined;
        return done(null, user);
      } catch (err) {
        done(err);
      }
    }));

    passport.serializeUser(function(user, cb) {
      process.nextTick(function() {
        cb(null, { _id: user._id, email: user.email });
      });
    });
  
    passport.deserializeUser(function(user, cb) {
      process.nextTick(function() {
        return cb(null, user);
      });
    });
};