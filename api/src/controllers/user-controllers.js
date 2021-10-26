const { User } = require('../models');

module.exports = {
    create: async (req, res) => {
        try {
            const user = await User.create(req.body);
            res.status(201).json({message: 'The user was created.', user: user});
        } catch (error) {
            res.status(500).json({message: 'An error occured'});
        }
    },
    update: (_req, res) => {
        
    },
    delete: (_req, res) => {
        
    },
    get: async (req, res) => {
        try {
            const id = req.params.id;
            const user = await User.findByPk(id);
            res.status(201).json({user: user});
        } catch (error) {
            res.status(500).json({message: 'An error occurred, while attempting to create a user.'});
        }
    },
}