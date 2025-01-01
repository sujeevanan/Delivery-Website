import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      `mongodb+srv://lsujee2000:lsujee2000@cluster0.t6eke.mongodb.net/food-del`
    )
    .then(() => {
      console.log("DB is connected");
    });
};
