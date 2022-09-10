const joi = require('joi'); 

const meetupSchema = joi.object({ 
    title: joi.string().min(3).required(),
    description: joi.string().min(3).required(), 
    tags: joi.string().min(3).required(), 
    date: joi.date().required(), 
    place: joi.string().min(3).required()
});
    
const validation = () => async (req, res, next) => {
    try {
        await meetupSchema.validateAsync(req.body);
        next();
    } catch (err){
        res.status(400).send(err.details);
    }
}

module.exports = validation;