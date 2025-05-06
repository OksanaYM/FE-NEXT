import {FC} from "react";
import {getCommentById} from "@/Services/api.service";


export type Props = {params: {id:string}}

const CommentPage: FC<Props> = async({params}) =>{
    const{id} = await params
    const comment = await getCommentById(id)
    return(
        <div> Comment №{id}:
            <h6>{comment.email}</h6>
            <p>{comment.body}</p>
        </div>
    )
};
export default CommentPage

