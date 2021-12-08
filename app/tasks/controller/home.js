const moment = require("moment")
const homePage = async (req, res, next) => {
    try {
        let taskTodo = [
            {
                id: 1,
                taskName: "Title One",
                dueDate: moment().format('DD-MM-YYYY'),
                users: ['ahmed'],
                taskCompleted: false
            },
            {
                id: 2,
                taskName: "Title two",
                dueDate: moment().format('DD-MM-YYYY'),
                users: ['John'],
                taskCompleted: false
            }
        ]
        console.log("HOME PAGE", req.app.taskTodo )
        req.app.taskTodo = req.app.taskTodo || taskTodo
        res.render('pages/front-page', { bodyHtml: req.app.taskTodo || taskTodo })
    }
    catch (error) {
        console.log(error)
        next(error)
    }
}

module.exports = {
    homePage
}