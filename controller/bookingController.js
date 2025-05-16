import Booking from "../models/bookingModel.js";
import Flight from "../models/flightModel.js";

export const renderBookingForm = async (req, res) => {
  const flights = await Flight.find(); // for dropdown
  res.render("createBooking", { flights });
};

export const createBooking = async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.redirect("/api/bookings/list");
  } catch (error) {
    res.status(500).send("Error creating booking");
  }
};

export const listBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate("flight");
    res.render("listBookings", { bookings });
  } catch (error) {
    res.status(500).send("Error fetching bookings");
  }
};

export const cancelBooking = async (req, res) => {
  try {
    await Booking.findByIdAndUpdate(req.params.id, { status: "Cancelled" });
    res.redirect("/api/bookings/list");
  } catch (error) {
    res.status(500).send("Error cancelling booking");
  }
};
