// require('dotenv').config() we can use this but is will give you bad coding consistency cause we use module type not using commonJS
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB();

/*
1). This is the first approch of connecting the database to the index.

import express from "express";
const app = express();

In JavaScript, ()() is a pattern used for immediately invoking a function. It is commonly known as an Immediately Invoked Function Expression (IIFE).

Explanation:
The first () contains a function expression (usually an anonymous function).
The second () immediately invokes that function.

";" this is used for cleaning perpose only at start of IIFE

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

    app.on("error", (error) => {
      console.log("ERR: ", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR : ", error);
    throw err;
  }
})(); 
*/
