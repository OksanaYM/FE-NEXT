import Link from "next/link";

export const Menu =() =>{
    return(
        <>
            <ul>
                <li>
                    <Link href={'/'}>HOME</Link>
                </li>
                <li>
                    <Link href={'/cars'}>Cars</Link>
                </li>
                <li>
                    <Link href={'/addCars'}>Add Cars</Link>
                </li>
            </ul>
        </>
    )
}