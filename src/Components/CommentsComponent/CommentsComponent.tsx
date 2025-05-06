import {getAllComments} from "@/Services/api.service";
import {IComment} from "@/Components/Models/IComment";
import {CommentComponent} from "@/component/CommentComponent";


export const CommentsComponent = async() =>{
    const comments = await getAllComments()
    return(
        <div>
            {
                comments.map((comment: IComment) =>
                    <CommentComponent key={comment.id} comment={comment}/>)
            }
        </div>
    )
}