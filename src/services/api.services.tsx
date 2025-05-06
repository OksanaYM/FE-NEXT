import {ICar} from "@/Components/models/ICar";

export const getAllCars = async(): Promise<ICar[]> =>{
    const cars = await fetch ('http://185.69.152.209/carsAPI/v1/doc')
        .then(value => value.json())
    return cars
}