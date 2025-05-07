import {FC} from "react";

type Props = {
    searchParams : Promise<{[key: string]: string | string[] | undefined}>
}

const SubmitPage:FC<Props> = async ({searchParams}) =>{
    fetch('http://185.69.152.209/carsAPI/v1/cars', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            key1: 'value1',
            key2: 'value2'
        })
    })

    const awaitSP = await searchParams

    return(
        <div>
            {awaitSP.brand}
            {awaitSP.year}
        </div>
    )

}
export default SubmitPage
