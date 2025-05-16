import express from "express";
import { createFlight, fetchFlights, updateFlight, deleteFlight, renderUpdateFlight } from "../controller/aviationController.js";

const router = express.Router();


router.get("/create", (req, res) => {
  res.render("createFlight");
});


router.post("/create", createFlight);


router.get("/list", fetchFlights);


router.get("/update/:id", renderUpdateFlight);


router.post("/update/:id", updateFlight);


router.get("/delete/:id", deleteFlight);

export default router;