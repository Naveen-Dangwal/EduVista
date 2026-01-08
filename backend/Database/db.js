const mongoose =require ('mongoose');
const connectdb = async() =>
{
    try {
      await mongoose.connect(process.env.MONGODB_URI) ;
      console.log("database is connected") 
    } catch (error) {
        console.log(error)
    }
}

module.exports={connectdb}