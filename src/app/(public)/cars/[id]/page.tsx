import {FC} from "react";
import {getCarById} from "@/services/api.services";



export type Props = {
    params: {id: number},

}

const CarPage: FC<Props> = async ({params}) =>{
    const {id} = await params
    const car = await getCarById(id)

    return(
        <div>
            The price of the {car.year} {car.brand} is {car.price} $

        </div>
    )
}
export default CarPage