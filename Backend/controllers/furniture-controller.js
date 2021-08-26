const express = require("express");
const logic = require("../business-logic-layer/furniture-logic");
const router = express.Router();

router.get("/api/types", async (request, response) => {
    try {
        const types = await logic.getAllTypesAsync();
        response.json(types);
    }
    catch(err) {
        response.status(500).send(err.message);
    }
});

router.get("/api/furniture", async (request, response) => {
    try {
        const furniture = await logic.getAllFurnitureAsync();
        response.json(furniture);
    }
    catch(err) {
        response.status(500).send(err.message);
    }
});

router.post("/api/furniture", async (request, response) => {
    try {
        const furniture = request.body;
        const addedFurniture = await logic.addFurnitureAsync(furniture);
        response.status(201).json(addedFurniture);
    }
    catch(err) {
        response.status(500).send(err.message);
    }
});

module.exports = router;