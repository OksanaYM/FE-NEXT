import {ICar} from "@/app/models/ICar";

export const getAllCars = async():Promise<ICar[]> =>{
    const cars = await fetch ('http://185.69.152.209/carsAPI/v1/cars')
        .then(value => value.json())
    return cars
}

export const getCarById = async(id: number): Promise<ICar> =>{
    const carById = await fetch ('http://185.69.152.209/carsAPI/v1/cars/' + id)
        .then(value => value.json())
    return carById
}