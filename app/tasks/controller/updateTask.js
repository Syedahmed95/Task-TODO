const joiValidation = require("joi")
const updateTask = async (req, res, next) => {
    try {
        const reqBody = req.body
        const schema = joiValidation.object({
            taskCompleted: joiValidation.boolean().required(),
            id: joiValidation.number().required()
        })
        if(reqBody.taskCompleted && reqBody.id){
            reqBody.taskCompleted = Boolean(reqBody.taskCompleted)
            reqBody.id = Number(reqBody.id)
        }
        const validation = schema.validate(reqBody)
        if (validation.error) {
            throw {
                message: validation.error.details[0].message.replace(/['"]/g, ''),
                code: 400
            }
        }
        req.app.taskTodo.forEach((data)=> {
            if(data.id === reqBody.id){
                data.taskCompleted = reqBody.taskCompleted
            }
        })
        res.redirect('/')
    }
    catch (error) {
        console.log(error)
        next(error)
    }
}

module.exports = {
    updateTask
}