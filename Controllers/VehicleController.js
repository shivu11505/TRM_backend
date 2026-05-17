const Vehicle = require("../models/Vehicle");

const addVehicle = async (req, res) => {

    try {

        const vehicle = new Vehicle({

            vehicleNumber: req.body.vehicleNumber,

            vehicleType: req.body.vehicleType,

            entryDate: req.body.entryDate,

            entryTime: req.body.entryTime,

            tollAmount: req.body.tollAmount

        });

        await vehicle.save();

        res.status(201).json({

            success: true,

            message: "Vehicle Added Successfully",

            data: vehicle

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });
    }
};

const getVehicles = async (req, res) => {

    try {

        const vehicles =
            await Vehicle.find();

        res.status(200).json({

            success: true,

            data: vehicles
        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message
        });
    }
};

module.exports = {
    addVehicle,
    getVehicles
};