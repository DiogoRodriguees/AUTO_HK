import { prisma } from "../services/prisma.js";

export const createCars = async (data) => {
    const cars = await prisma.cars.create({
        data,
        select: {
            id: true,
            veiculo: true,
            marca: true,
            ano: true,
            desc: true,
            vendido: true,
            created: true,
            updated: true,
        },
    });
    return cars;
};

export const getAll = async () => {
    const allcars = await prisma.cars.findMany({
        select: {
            id: true,
            veiculo: true,
            marca: true,
            ano: true,
            desc: true,
            vendido: true,
            created: true,
            updated: true,
        }
    });
    return allcars;
};

export const getById = async (id) => {
    const cars = await prisma.cars.findUnique({
        where: {
            id,
        },
    });
    return cars;
};

export const getByParams = async (query) => {
    const { q } = query;
    const cars = await prisma.cars.findMany({
        where: {
            OR: [
                {veiculo: query.q},
                {marca: query.q}
            ]
        }
    });
    return cars;
};

export const updateCars = async (id, data) => {
    const cars = await prisma.cars.update({
        where: {
            id,
        },
        data,
    });
    return cars;
};

export const updateCarsData = async (id, data) => {
    const cars = await prisma.cars.update({
        where: {
            id,
        },
        data,
    });
    return cars;
};

export const deleteCars = async (id) => {
    await prisma.cars.delete({
        where: {
            id,
        },
    });
    return;
};


