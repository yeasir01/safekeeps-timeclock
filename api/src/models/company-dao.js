const Company = require('./company-schema');

module.exports.createOneCompany = async (data = {}) => {
    const newCompany = await new Company(data);
    return await newCompany.save();
};

module.exports.findOneCompany = async (query = {}, selects = [], options = {lean: true}) => {
    if (options.lean){
        return await Company.findOne(query).select(selects).lean();
    }
    return await Company.findOne(query).select(selects);
};

module.exports.updateOneCompany = async (filter = {}, update = {}, options = {lean: true, returnDocument: 'after'}) => {
    return await Company.findOneAndUpdate(filter, update, options);
};

module.exports.deleteOneCompany = async (query) => {
    return await Company.deleteOne(query);
};