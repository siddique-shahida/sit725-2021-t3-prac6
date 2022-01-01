var express = require("express")
var router =express.Router();
var Controllers= require("../controllers");

router.get('/',(req,res) => {
    Controllers.projectsController.getProjects(res);

    // getProjects((err,result) => {
    //     if(err) {
    //         res.json({statusCode: 400, message: err})
    //     }
    //     else {
    //         res.json({statusCode: 200, message:"Success", data: result})
    //     }
    // })
    //res.json({statusCode: 200, data: cardList, message:"Success"})
})

app.post('/api/projects',(req,res) => {

    Controllers.projectsController.createProject(req.body, res);

    // console.log("New Project added", req.body)
    // var newProject = req.body;
    // //cardList.push(newProject);
    // insertProjects(newProject,(err,result) => {
    //     if(err) {
    //         res.json({statusCode: 400, message: err})
    //     }
    //     else {
    //         res.json({statusCode: 200, message:"Project Successfully added", data: result})
    //     }
    // })
    //res.json({statusCode: 200, message:"Project Successfully added", data: newProject})
})

module.exports=router;