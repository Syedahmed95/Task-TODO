module.exports = (app, router)=>{
    const taskController = require("../controller/createTasks")
    const homePageController = require("../controller/home")
    const taskUpdateController = require("../controller/updateTask")
    router
        .get("/", homePageController.homePage)
    router
        .post("/task", taskController.createTask)
    router 
        .post("/task/update", taskUpdateController.updateTask)
}