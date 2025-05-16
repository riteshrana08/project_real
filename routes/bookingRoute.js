import express from "express";
import {
  renderBookingForm,
  createBooking,
  listBookings,
  cancelBooking
} from "../controller/bookingController.js";

const router = express.Router();

router.get("/create", renderBookingForm);
router.post("/create", createBooking);

router.get("/list", listBookings);

router.get("/cancel/:id", cancelBooking);

export default router;
