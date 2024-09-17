// src/db.ts
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const mongoURI = 'mongodb+srv://15July24Admin:vYBPsu7Zm9XKdwOC@k1paydev.tde229c.mongodb.net/K1payDev?retryWrites=true'; // replace with your MongoDB URI
    await mongoose.connect(mongoURI, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
      // Optional settings
      // useFindAndModify: false,
      // useCreateIndex: true,
    });
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
