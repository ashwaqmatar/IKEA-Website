const dal = require("../data-access-layer/dal");

async function getAllTypesAsync() {
    const sql = "SELECT * FROM types";
    const types = await dal.executeAsync(sql);
    return types;
}

async function getAllFurnitureAsync() {
    const sql = "SELECT F.*, T.name FROM furniture AS F JOIN types AS T ON F.typeId = T.typeId";
    const furniture = await dal.executeAsync(sql);
    return furniture;
}

async function addFurnitureAsync(furniture) {
    // const sql = "INSERT INTO Furniture(typeId, size, color, price) VALUES(?, ?, ?, ?)";
    const sql = "INSERT INTO Furniture VALUES(DEFAULT, ?, ?, ?, ?)"; // DEFAULT = Generate A_I id
    const info = await dal.executeAsync(sql, [furniture.typeId, furniture.size, furniture.color, furniture.price]);
    furniture.furnitureId = info.insertId; // A_I
    return furniture;
}

module.exports = {
    getAllTypesAsync,
    getAllFurnitureAsync,
    addFurnitureAsync
};

