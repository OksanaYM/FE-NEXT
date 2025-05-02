import {FC} from "react";

export type Props = {params: {id:string}}

const PostPage: FC<Props> = async({params}) =>{
    const{id} = await params
    return(
        <div> post page content {id}
        </div>
    )
};
export default PostPage