import {FC} from "react";
import {getUserById} from "@/Services/api.service";





export type Props = {
    params: {id:string}
}


const UserPage: FC<Props> = async({params}) =>{
    const {id} = await params
    const user = await getUserById(id)

    return(
        <div> user page content {id}
            {user.phone}
            {user.email}
            Address: {user.street}
            Company: {user.company}

        </div>


    )
};
export default UserPage