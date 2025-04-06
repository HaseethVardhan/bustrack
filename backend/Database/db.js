import mongoose from "mongoose"

const connectToDB=async function (){
    try {
        console.log(`${process.env.MONGODB_URL}`)
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URL}`)
        console.log("Database connected successfully")
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}   

export default connectToDB;