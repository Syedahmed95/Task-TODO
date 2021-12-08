module.exports = function(app, router){
    app.use(router)
    const tasksRoutes = require("./tasks/routes/task.routes")
    tasksRoutes(app, router)
}