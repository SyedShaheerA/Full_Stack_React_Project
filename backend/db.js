const mongoose = require('mongoose');
const mongoDburl= "mongodb://homearoma:homearoma01@ac-nw9p8yw-shard-00-00.xlud5nk.mongodb.net:27017,ac-nw9p8yw-shard-00-01.xlud5nk.mongodb.net:27017,ac-nw9p8yw-shard-00-02.xlud5nk.mongodb.net:27017/homearomamern?ssl=true&replicaSet=atlas-u247pk-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"
const mongoDB =async()=>{
    await mongoose.connect(mongoDburl, {useNewUrlParser: true}, async(err, result)=>{
        if(err) console.log("---", err)
        else{
                console.log("connected");
                const fetched_data = await mongoose.connection.db.collection("food_item"); //used for connection with the dataset
                fetched_data.find({}).toArray( function(err, data){
                    if(err){
                        console.log(err);
                    }
                    else{
                        console.log();
                    }
                }) //we will leave curly braces since we need the entire data set. 
            }

    });
}

module.exports = mongoDB;
