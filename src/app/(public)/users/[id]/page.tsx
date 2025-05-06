import {FC} from "react";
import {getUserById} from "@/Services/api.service";


export type Props = {
    params: {id:number}
}


const UserPage: FC<Props> = async({params}) =>{
    const {id} = await params
    const user = await getUserById(id)

    return(
        <div>
            <p> {user.phone}</p>
            <p>{user.email}</p>
            <h5>Address:</h5> <p>City: {user.address.city}, Street: {user.address.street}</p>
            <h5>Company:</h5> <p>{user.company.name}</p>

        </div>


    )
};
export default UserPage