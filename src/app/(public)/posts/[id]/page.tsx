import {FC} from "react";
import {getPostById} from "@/Services/api.service";


export type Props = {params: {id:number}}

const PostPage: FC<Props> = async({params}) =>{
    const{id} = await params
    const post = await getPostById(id)
    return(
        <div> post №{id}:
            <p>{post.body}</p>
        </div>
    )
};
export default PostPage


