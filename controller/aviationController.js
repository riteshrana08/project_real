 import Flight from "../models/flightModel.js";


export const createFlight = async (req, res) => {
  try {
    const flightData = new Flight(req.body);
    await flightData.save();
    res.redirect("/api/aviation/list");
  } catch (error) {
    console.error("Error creating flight:", error);
    res.status(500).json({ message: "Error creating flight" });
  }
};


export const fetchFlights = async (req, res) => {
  try {
    const flights = await Flight.find();
    res.render("listFlights", { flights });
  } catch (error) {
    console.error("Error fetching flights:", error);
    res.status(500).json({ message: "Error fetching flights" });
  }
};


export const renderUpdateFlight = async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.id);
    if (!flight) return res.status(404).send("Flight not found");
    res.render("updateFlight", { flight });
  } catch (error) {
    res.status(500).send("Error fetching flight for update");
  }
};


export const updateFlight = async (req, res) => {
  try {
    await Flight.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/api/aviation/list");
  } catch (error) {
    res.status(500).send("Error updating flight");
  }
};


export const deleteFlight = async (req, res) => {
  try {
    await Flight.findByIdAndDelete(req.params.id);
    res.redirect("/api/aviation/list");
  } catch (error) {
    res.status(500).send("Error deleting flight");
  }
};