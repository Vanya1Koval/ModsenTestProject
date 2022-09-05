const joi = require('joi'); 

const querySchema = joi.object({ 
    sort: joi.string(),
    search: joi.string(), 
    from: joi.string(), 
    to: joi.date(), 
    limit: joi.number().integer().positive().required(),
    page: joi.number().integer().positive().required()
});
    
const validation = () => async (req, res, next) => {
    try {
        await querySchema.validateAsync(req.query);
        next();
    } catch (err){
        res.status(400).send(err.details);
    }
}

module.exports = validation;