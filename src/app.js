import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// .use() is used for configuration where middleware is used
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" })); // by this DB accept JSON as a request and set the limit of the data acceptance
app.use(express.urlencoded({ extended: true, limit: "16kb" })); // by this DB accept datas from another urls and extended is used for objects inside object or nested object.
app.use(express.static("public")); // sometimes we have to store pdfs,images, files etc in our DB so this line is used to config this.

app.use(cookieParser()); // used for set cookies and get cookies from the user.

export { app };
