
import {FC} from "react";
import Link from "next/link";
import {IComment} from "@/Components/Models/IComment";

type PropsTypeComment ={
    comment: IComment
}
export const CommentComponent: FC<PropsTypeComment> =({comment}) =>{
    return(
        <div>
            {<Link href={'/comments/' + comment.id.toString()}>{comment.id} - {comment.postId}: {comment.name}</Link>}

        </div>
    )
}