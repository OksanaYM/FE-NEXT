import {FC} from "react";

type Props = {
    searchParams : Promise<{[key: string]: string | string[] | undefined}>
}

const SubmitPage:FC<Props> = async ({searchParams}) =>{
    const awaitSP = await searchParams
    fetch('http://185.69.152.209/carsAPI/v1/cars', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(awaitSP)
    })



    return(
        <div>
            {awaitSP.brand} - {awaitSP.year} - {awaitSP.price}
        </div>
    )

}
export default SubmitPage
