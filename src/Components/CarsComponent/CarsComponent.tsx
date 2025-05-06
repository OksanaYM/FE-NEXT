export const CarsComponent = async() =>{
    const cars = await getAllCars()
    return(
        <div>
            cars.map((car: ICar) =>
            <CarComponent key={car.id} car={car}/>)
        </div>
    )
}