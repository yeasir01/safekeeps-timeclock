const yup = require('yup');

module.exports.createEmployeeSchema = yup.object({
    body: yup.object({
        first_name: yup.string().min(2).max(55).required(),
        last_name: yup.string().min(2).max(55).required(),
        email: yup.string().email(),
        pin: yup.number().min(4),
        start_date: yup.date(),
        end_date: yup.date(),
        employee_id: yup.string().max(55),
        pay_rate: yup.string(),
        group_id: yup.string(),
    })
});