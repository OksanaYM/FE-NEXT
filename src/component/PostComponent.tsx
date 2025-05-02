import {IUser} from "@/Components/Models/IUser";
import {FC} from "react";
import Link from "next/link";
import {IPost} from "@/Components/Models/IPost";

type PropsTypePost ={
    post: IPost
}
export const PostComponent: FC<PropsTypePost> =({post}) =>{
    return(
        <div>
            {<Link href={'/posts/' + post.id.toString()}>{post.id} - {post.userId}: {post.title}</Link>}

        </div>
    )
}