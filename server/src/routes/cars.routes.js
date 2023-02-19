import { create, get, getId, update, remove, getParams } from "../controllers/cars.controller.js";

const carsRoutes = app => {
    app.post("/cars", create);
    app.get("/cars", get);
    app.get("/cars/:id", getId);
    app.get("/cars/find", getParams);
    app.put("/cars/:id", update);
    app.delete("/cars/:id", remove);
};

export default carsRoutes;