import express from "express";
import {getWeatherByCity } from "../controllers/weather.controller.js";

const router = express.Router();

router.get("/weather",getWeatherByCity);

export default router;