import { Router } from "express";
import { getPerson } from "../controllers/person.controller";

const router = Router();

router.get("/getprofile", getPerson);

export default router;
