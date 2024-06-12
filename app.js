import express from "express";
import userRoutr from './routes/user.js';
import taskRouter from './routes/task.js';
import {config} from "dotenv";
import cookieParser from "cookie-parser";
import errorMiddleware from "./middlewares/error.js";
import cors from "cors";

export const app = express();

config({
    path:"./data/config.env",
});

// useing middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: [process.env.FRONTEND_URL],
        methods:["GET","POST","PUT","DELETE"],
        credentials : true,
    })
);

//using routes
app.use("/api/v1/users",userRoutr);
app.use("/api/v1/task",taskRouter);

app.get("/", (req,res) => {
    res.send("nice working");
});


app.use(errorMiddleware);