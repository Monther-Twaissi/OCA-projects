import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(
      `MongoDB is contented successfully ${conn.connection.host}`.bgCyan.bold
        .underline
    );
  } catch (err) {
    console.error(`Error connecting to Database: ${err}`.red.bold.underline);
    process.exit(1);
  }
};

export default connectDB;
