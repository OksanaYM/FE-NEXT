import {ICar} from "@/Components/models/ICar";
import {FC} from "react";
import Link from "next/link";

type PropsTypeCar = {
    car: ICar
}

export const CarComponent: FC<PropsTypeCar> = ({car}) =>{
    return(
        <div>
            {<Link href={'/cars/' + car.id.toString()}>{car.id} - {car.brand}</Link>}
        </div>
    )
}