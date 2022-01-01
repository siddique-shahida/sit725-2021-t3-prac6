const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://sit725-2021:1234567890@sit-725-2021-week4.4e6ld.mongodb.net/sit725-t2-week4?retryWrites=true&w=majority"
let mongoClient= new MongoClient(uri,{useNewUrlParser:true,useUnifiedTopology:true});

let projectCollection;

mongoClient.connect((err,db) => {
            projectCollection = client.db().collection(collectionName);
            if(!err) {
                console.log('MongoDB Connected')
            }
            else {
                console.log("DB Error: ", err);
                process.exit(1);
            }
        });

exports.mongoClient=mongoClient;