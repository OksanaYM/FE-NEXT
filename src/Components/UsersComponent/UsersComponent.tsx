import {getAllUsers} from "@/Components/Services/api.service";
import {IUser} from "@/Components/Models/IUser";
import {UserComponent} from "@/component/UserComponent";


export const UsersComponent = async() =>{
    const users = await getAllUsers()
    return(
        <div>
            {
                users.map((user: IUser) =>
                    <UserComponent key={user.id} user={user}/>)
            }
        </div>
    )
}