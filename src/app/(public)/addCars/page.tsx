
import Form from "next/form";

const CarsAddPage = () =>{
    return(
        <>
            <Form action={"/submit"}>
                <input type={"text"} name={"name"} placeholder={"Brand"}/>
                <input type={"number"} name={"name"} placeholder={"Year"}/>
                <input type={"number"} name={"name"} placeholder={"Price"}/>
                <button>ADD CAR</button>
            </Form>
        </>
    )
}
export default CarsAddPage