const joi = require('joi'); 

const meetupSchema = joi.object({ 
    title: joi.string().min(3).required(),
    description: joi.string().min(3).required(), 
    tagsArr: joi.array().required(), 
    date: joi.date().required(), 
    place: joi.string().min(3).required(),
    userId: joi.string().required(),
    membersId: joi.string(),

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