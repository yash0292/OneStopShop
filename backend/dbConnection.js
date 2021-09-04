import mongoose from "mongoose";

const dbConnection = async () =>{
   try {
   const conn =  await mongoose.connect(process.env.MONGO_URI,{
       useNewUrlParser:true, 
       useUnifiedTopology:true

    });
    console.log("Database Connected Successfully")
   } catch (error) {
       console.log(error)
        process.exit(1);
   }
}

export default dbConnection