import mongoose from 'mongoose';

export const connectDatabase = async () => {
    let dbConnect;
    try {
        dbConnect = await mongoose.connect(process.env.DATABASE_URI,{useNewUrlParser:true, useUnifiedTopology: true, useCreateIndex:true});
    }catch (e){
        console.log(e.message)
    }
    console.log(`Connected to mongoDB: ${dbConnect.connection.host}`)
};

