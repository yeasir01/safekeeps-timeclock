const yup = require('yup');

module.exports.registerationSchema = yup.object({
    body: yup.object({
        email: yup.string().email(),
        first_name: yup.string().min(2).max(55).required(),
        last_name: yup.string().min(2).max(55).required(),
        password: yup.string().required(),
        phone: yup.string().max(10),
        picture: yup.string().url(),
    })
});

module.exports.loginSchema = yup.object({
    body: yup.object({
        email: yup.string().email(),
        password: yup.string().required(),
    })
});

module.exports.forgotSchema = yup.object({
    body: yup.object({
        email: yup.string().email(),
    })
});