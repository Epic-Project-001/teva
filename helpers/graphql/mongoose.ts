import mongoose from "mongoose";
const user = process.env.ATLAS_DB_USER || process.env.NEXT_PUBLIC_ATLAS_DB_USER;
const password =
  process.env.ATLAS_DB_PASSWORD || process.env.NEXT_PUBLIC_ATLAS_DB_PASSWORD;
const MONGO_URI = `mongodb+srv://${user}:${password}@jumohealth.og3bk.mongodb.net/Teva?retryWrites=true&w=majority&appName=JumoHealth`;

console.log("CONNECTION STRING", MONGO_URI);
console.log("ENVIORMENT", process.env);
console.log("PROCESS", process);
if (!MONGO_URI) {
  throw new Error("Please define the MONGO_URI environment variable.");
}

let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

export default async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGO_URI).then((mongoose) => {
      console.log("Connected to MongoDB");
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
