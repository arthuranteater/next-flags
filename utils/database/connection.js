import mongoose from "mongoose";

let isConnected = false;

export async function connectToDB() {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("already connected to mongo");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "user_blogs",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("connected to mongo");
  } catch (error) {
    console.log(error);
  }
}
