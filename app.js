import express from "express";
import "dotenv/config";
import "express-async-errors";
import dbConnect from "./dbConnect.js";
import morgan from "morgan";
import jobRouter from "./routes/jobRouter.js";
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";

const app = express();
app.use(express.json());

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

const port = process.env.PORT || 5000;

app.use("/api/v1/jobs", jobRouter);
app.use(errorHandlerMiddleware);

(async () => {
  try {
    await dbConnect(process.env.MONGO_URL);
    console.log("database connected");
    app.listen(port, console.log("Server is running on port ", port));
  } catch (error) {
    console.log(error);
  }
})();