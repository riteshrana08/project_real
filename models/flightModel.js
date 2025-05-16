import mongoose from "mongoose";

const flightSchema = new mongoose.Schema({
  departure: { type: String, required: true },
  arrival: { type: String, required: true },
  departureDate: { type: Date, required: true },
  returnDate: { type: Date, required: true },
});

const Flight = mongoose.model("Flight", flightSchema);

export default Flight;
