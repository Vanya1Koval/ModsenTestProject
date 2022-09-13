const joi = require('joi'); 

const userSchema = joi.object({ 
    username: joi.string().min(5).max(10).required(),
    password: joi.string().min(5).max(10).required(),
});
    
const validation = () => async (req, res, next) => {
    console.log('validation')
    try {
        await userSchema.validateAsync(req.body);
        next();
    } catch (err){
        res.status(400).send(err.details);
    }
}

module.exports = validation;