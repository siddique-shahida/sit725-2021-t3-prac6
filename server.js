// require('dotenv').config()
// var express = require("express")
// var cors = require("cors")
// var app = express()

// let dbConnect = require("./dbConnect");

// // const MongoClient = require('mongodb').MongoClient;
// // let projectCollection;


// // Database Connectivity
// // const uri = "mongodb+srv://sit725-2021:1234567890@sit-725-2021-week4.4e6ld.mongodb.net/sit725-t2-week4?retryWrites=true&w=majority"
// // const client = new MongoClient(uri,{ useNewUrlParser: true })
// app.use(express.static(__dirname+'/public'))
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cors())

// // const createColllection = (collectionName) => {
// //     client.connect((err,db) => {
// //         projectCollection = client.db().collection(collectionName);
// //         if(!err) {
// //             console.log('MongoDB Connected')
// //         }
// //         else {
// //             console.log("DB Error: ", err);
// //             process.exit(1);
// //         }
// //     })
// // }

// const cardList = [
//     {
//         title: "Kitten 2",
//         image: "images/kitten-2.jpg",
//         link: "About Kitten 2",
//         description: "Demo desciption about kitten 2"
//     },
//     {
//         title: "Kitten 3",
//         image: "images/kitten-3.jpg",
//         link: "About Kitten 3",
//         description: "Demo desciption about kitten 3"
//     }
// ]

// const insertProjects = (project,callback) => {
//     projectCollection.insert(project,callback);
// }

// const getProjects = (callback) => {
//     projectCollection.find({}).toArray(callback);
// }

// // app.get('/api/projects',(req,res) => {
// //     getProjects((err,result) => {
// //         if(err) {
// //             res.json({statusCode: 400, message: err})
// //         }
// //         else {
// //             res.json({statusCode: 200, message:"Success", data: result})
// //         }
// //     })
// //     //res.json({statusCode: 200, data: cardList, message:"Success"})
// // })

// // app.post('/api/projects',(req,res) => {
// //     console.log("New Project added", req.body)
// //     var newProject = req.body;
// //     //cardList.push(newProject);
// //     insertProjects(newProject,(err,result) => {
// //         if(err) {
// //             res.json({statusCode: 400, message: err})
// //         }
// //         else {
// //             res.json({statusCode: 200, message:"Project Successfully added", data: result})
// //         }
// //     })
// //     //res.json({statusCode: 200, message:"Project Successfully added", data: newProject})
// // })

// var port = process.env.port || 3000;

// app.listen(port,()=>{
//     console.log("App listening to: "+port);
//     createColllection("pets")
// })
let express = require("express");
let app = express();
let dbConnect = require("./dbConnect");

//dbConnect.dbConnect()
//var app = require('express')();
let http = require('http').createServer(app);
let io = require('socket.io')(http);
//const MongoClient = require('mongodb').MongoClient;

// routes
let projectsRoute = require('./routes/projects')


var port = process.env.PORT || 8080;
app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use('/api/projects',projectsRoute)


app.get("/test", function (request, response) {
  var user_name = request.query.user_name;
  response.end("Hello " + user_name + "!");
});

app.get('/addTwoNumbers/:firstNumber/:secondNumber', function(req,res,next){
  var firstNumber = parseInt(req.params.firstNumber) 
  var secondNumber = parseInt(req.params.secondNumber)
  var result = firstNumber + secondNumber || null
  if(result == null) {
    res.json({result: result, statusCode: 400}).status(400)
  }
  else { res.json({result: result, statusCode: 200}).status(200) } 
})

//socket test
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  setInterval(()=>{
    socket.emit('number', parseInt(Math.random()*10));
  }, 1000);

});


http.listen(port,()=>{
  console.log("Listening on port ", port);
});