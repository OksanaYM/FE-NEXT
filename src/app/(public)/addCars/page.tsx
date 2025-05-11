// import Form from "next/form";
//
// const CarsAddPage = () =>{
//     return(
//         <>
//             <Form action={"/submit"}>
//                 <input type={"text"} name={"brand"} placeholder={"Brand"}/>
//                 <input type={"number"} name={"year"} placeholder={"Year"}/>
//                 <input type={"number"} name={"price"} placeholder={"Price"}/>
//                 <button>Add Car</button>
//
//             </Form>
//         </>
//     )
// }
// export default CarsAddPage



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
                    <input type="text" {...register('brand')}/>
                    <div>{errors.brand?.message}</div>
                </div>
                <div>
                    <input type="number" {...register('price')}/>
                    <div>{errors.price?.message}</div>
                </div>
                <div>
                    <input type="number" {...register('year')}/>
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