import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  passengerName: { type: String, required: true },
  email: { type: String, required: true },
  flight: { type: mongoose.Schema.Types.ObjectId, ref: "Flight", required: true },
  status: { type: String, enum: ["Confirmed", "Cancelled"], default: "Confirmed" },
  createdAt: { type: Date, default: Date.now }
});

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;
