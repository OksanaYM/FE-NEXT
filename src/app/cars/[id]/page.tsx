import {FC} from "react";
import {getCarById} from "@/app/services/api.service";

export type Props = {
    params: {id: number}
}

const CarsPage: FC<Props> = async ({params}) =>{
    const {id} = await params
    const car = await getCarById(id)
    return(
        <>
            The price of the {car.year} {car.brand} is {car.price}$
        </>
    )

}
export default CarsPage