import express from "express";
import {
  index
} from "../Controllers/index.js";

const router = express.Router()

router.get("/", index)

export default router