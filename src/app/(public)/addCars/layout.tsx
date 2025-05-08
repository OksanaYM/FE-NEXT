import {Metadata} from "next";
import React from "react";

export const metadata: Metadata ={
    title: 'CarsAddLayout metadata'
}
type Props = {children: React.ReactNode}

const CarsAddLayout = ({children}: Props) =>{
    return(
        <>
            {children}
        </>
    )
}
export default CarsAddLayout
