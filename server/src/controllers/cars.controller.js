import { createCars, getAll, getById, updateCars, deleteCars, updateCarsData, getByParams } from "../repositorys/cars.repositorys.js";
import { schema } from "../validations/validations.js";

export const create = async (req, res) => {
    try {
        await schema.validate(req.body);

        const cars = await createCars(req.body);
        res.status(200).send(cars);
    } catch (e) {
        res.status(400).send(e);
    }
};

export const get = async (req, res) => {
    try{
        const allcars = await getAll();
        res.status(200).send(allcars);
    } catch (e) {
        res.status(400).send(e);
    }
};

export const getId = async (req, res) => {
    try {
        const cars = await getById(Number(req.params.id));
        res.status(200).send(cars);
    } catch (e) {
        res.status(400).send(e);
    }
};

export const getParams = async (req, res) => {
    try {
        const cars = await getByParams(req.query);
        res.status(200).send(cars);
    } catch (e) {
        res.status(400).send(e);
    }
};

export const update = async (req, res) => {
    try {
        const cars = await updateCars(Number(req.params.id), req.body);
        res.status(200).send(cars);
    } catch (e) {
        res.status(400).send(e);

    }
};

export const updateData = async (req, res) => {
    try {
        const cars = await updateCarsData(Number(req.params.id), req.body);
        res.status(200).send(cars);
    } catch (e) {
        res.status(400).send(e);
    }
}

export const remove = async (req, res) => {
    try {
        await deleteCars(Number(req.params.id));
        res.status(200).send();
    } catch (e) {
        res.status(400).send(e);
    }
}