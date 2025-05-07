
import Form from "next/form";

const CarsAddPage = () =>{
    return(
        <>
            <Form action={"/submit"}>
                <input type={"text"} name={"brand"} placeholder={"Brand"}/>
                <input type={"number"} name={"year"} placeholder={"Year"}/>
                <input type={"number"} name={"price"} placeholder={"Price"}/>
                <button>ADD CAR</button>
            </Form>
        </>
    )
}
export default CarsAddPage