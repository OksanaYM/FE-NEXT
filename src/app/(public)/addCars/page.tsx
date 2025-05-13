"use client"


import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {ICar} from "@/app/models/ICar";
import axios from "axios";
import {carValidator} from "@/validator/validator";

const CarsAddPage = ()=>{
    const {register, handleSubmit, formState: {errors}} = useForm<ICar>({
        mode: 'all',
        resolver: joiResolver (carValidator)
    })
    const createHandler = (data: ICar) =>{
        addCar(data)
    }
    return(
        <>
            <form onSubmit={handleSubmit(createHandler)}>
                <div>
                    <input type="text" placeholder={'Brand'} {...register('brand')}/>
                    <div>{errors.brand?.message}</div>
                </div>
                <div>
                    <input type="number" placeholder={'Price'} {...register('price')}/>
                    <div>{errors.price?.message}</div>
                </div>
                <div>
                    <input type="number" placeholder={'Year'} {...register('year')}/>
                    <div>{errors.year?.message}</div>
                </div>
                <button>SAVE CAR</button>


            </form>
        </>
    )
}
export default CarsAddPage

const axiosInstance = axios.create({
    baseURL: 'http://185.69.152.209/carsAPI/v1',
    headers: {'Content-Type': 'application/json'}
});


export const addCar = async (car: ICar) =>{
    await axiosInstance.post("/cars", car)
}