require("dotenv").config();

const express = require("express");

const cors = require("cors");

const connectDB = require("./config/db");

const app = express();

const vehicleRoutes = require("./routes/vehicleRoutes");

connectDB();

app.use(cors());

app.use(express.json());
app.use("/api/vehicles", vehicleRoutes);

app.get("/", (req, res) => {

    res.send("Toll Road Backend Running");

});

const PORT = 5000;

app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});

