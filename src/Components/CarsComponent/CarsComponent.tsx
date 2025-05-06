import {getAllCars} from "@/services/api.services";
import {ICar} from "@/Components/models/ICar";
import {CarComponent} from "@/Component/CarComponent";

export const CarsComponent = async() =>{
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
