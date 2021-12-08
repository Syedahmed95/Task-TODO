const joiValidation = require("joi")
const moment = require("moment")

const createTask = async (req, res, next) => {
    try {
        const reqBody = req.body
        const schema = joiValidation.object({
            taskName: joiValidation.string().required(),
            dueDate: joiValidation.date().required(),
            users: joiValidation.string(),
            taskCompleted: joiValidation.boolean()
        })
        if(!reqBody.taskCompleted){
            reqBody.taskCompleted = false
        }
        if(reqBody.taskCompleted === 'true'){
            reqBody.taskCompleted = true
        }
        const validation = schema.validate(reqBody)
        if (validation.error) {
            throw {
                message: validation.error.details[0].message.replace(/['"]/g, ''),
                code: 400
            }
        }
        reqBody.dueDate = moment(reqBody.dueDate, "YYYY-MM-DD").format("DD-MM-YYYY")
        reqBody.users = [reqBody.users]
        let idsNumber = 0
        if(req.app.taskTodo.length > 0) {
            idsNumber = req.app.taskTodo[req.app.taskTodo.length - 1].id
        }
        reqBody.id = idsNumber + 1
        req.app.taskTodo.push(reqBody)
        res.redirect("/")
    }
    catch (error) {
        console.log(error)
        next(error)
    }
}

module.exports = {
    createTask
}