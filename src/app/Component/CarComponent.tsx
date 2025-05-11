import {FC} from "react";
import {ICar} from "@/app/models/ICar";
import Link from "next/link";
type PropsTypeCar ={
    car: ICar
}

export const CarComponent: FC<PropsTypeCar> = ({car}) =>{
    return(
        <div>
            {<Link href={'/cars/' + car.id}> {car.id} - {car.brand} - {car.year} year  </Link>}
        </div>
    )

}