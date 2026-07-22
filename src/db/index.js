// import { webcrypto } from 'crypto'
import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js'; 

// if (!globalThis.crypto) {
//   globalThis.crypto = webcrypto
// }

const connectDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        console.log(`\n MongoDB connected !! DB Host : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("\n MONGODB connection error : ",error);
        process.exit(1)
        
    }
}

export default connectDB;




