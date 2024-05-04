import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName: 'JOB_SEEKING'
    })
    .then(()=>{
        console.log('Data Base connected!');
    })
    .catch((err)=>{
        console.log(`Some error occured while connected to db: ${err}`);
    })
}