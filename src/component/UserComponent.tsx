import {IUser} from "@/Components/Models/IUser";
import {FC} from "react";
import Link from "next/link";

type PropsTypeUser ={
    user: IUser
}
export const UserComponent: FC<PropsTypeUser> =({user}) =>{
    return(
        <div>
            {<Link href={'/users/' + user.id.toString()}>{user.id} - {user.name}</Link>}

        </div>
    )
}