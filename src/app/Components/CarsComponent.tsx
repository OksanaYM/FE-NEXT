import {getAllCars} from "@/app/services/api.service";
import {ICar} from "@/app/models/ICar";
import {CarComponent} from "@/app/Component/CarComponent";

export const CarsComponent = async () =>{
    const cars = await getAllCars()
    return(
        <div>
            {
                cars.map((car: ICar) =>
                <CarComponent key={car.id} car={car}/>)
            }


        </div>
    )
}