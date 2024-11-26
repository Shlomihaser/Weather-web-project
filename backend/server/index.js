import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import weatherRoute from "../routers/weather.router.js"

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api",weatherRoute);

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
})