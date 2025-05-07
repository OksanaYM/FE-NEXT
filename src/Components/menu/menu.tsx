import Link from "next/link";

export const Menu = () =>{
    return(
        <div className={'menu'}>
            <ul>
                <li>
                    <Link href={'/'}>Home</Link>
                </li>
                <li>
                    <Link href={'/cars'}>Cars</Link>
                </li>
                <li>
                    <Link href={'/addCars'}>Add cars</Link>
                </li>
            </ul>
        </div>
    )
}