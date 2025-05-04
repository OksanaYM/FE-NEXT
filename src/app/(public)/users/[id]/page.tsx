import {FC} from "react";
import {getUserById} from "@/Services/api.service";
import {IUser} from "@/Components/Models/IUser";



export type Props = {
    params: {id:string}
}


const UserPage: FC<Props> = async({params}) =>{
    const {id} = await params
    const user = await getUserById(id)

    return(
        <div> user page content {id}

            {user.email}
            Address: {user.address}
            Company: {user.company}

        </div>


    )
};
export default UserPage