const User = require('../models/Users');

const user = new User({firstName: 'yeasir', email: 'expl@gmail.com'});

user.save()
.then(res=>console.log(res))
.catch(err=>console.log(err));

User.findOne({})
.then(res=>console.log('found the following', res))
.catch(err=>console.log(err));