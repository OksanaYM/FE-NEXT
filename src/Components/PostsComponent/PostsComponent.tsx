import {getAllPosts} from "@/Services/api.service";
import {IPost} from "@/Components/Models/IPost";
import {PostComponent} from "@/component/PostComponent";


export const PostsComponent = async() =>{
    const posts = await getAllPosts()
    return(
        <div>
            {
                posts.map((post: IPost) =>
                    <PostComponent key={post.id} post={post}/>)
            }
        </div>
    )
}