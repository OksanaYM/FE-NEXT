import Form from "next/form";


export default function Home() {
  return (
    <div>
      <Form action={"/submit"} className={'form'} >
        <input type={"text"} name={"name"} placeholder={"Brand"}/>
        <input type={"number"} name={"year"} placeholder={"Year"}/>
        <input type={"number"} name={"price"} placeholder={"Price"}/>
        <button>ADD CAR</button>
      </Form>
    </div>
  );
}
