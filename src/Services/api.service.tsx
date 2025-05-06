import {IUser} from "@/Components/Models/IUser";
import {IPost} from "@/Components/Models/IPost";
import {IComment} from "@/Components/Models/IComment";

export const getAllUsers = async (): Promise<IUser[]> =>{
    const users = await fetch ('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
    return users
};
export const getAllPosts = async (): Promise<IPost[]> =>{
    const posts = await fetch ('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json())
    return posts
};

export const getAllComments = async (): Promise<IComment[]> =>{
    const comments = await fetch ('https://jsonplaceholder.typicode.com/comments')
        .then(value => value.json())
    return comments
}

export const getUserById = async(id:number): Promise<IUser> =>{
    const userById = await fetch ('https://jsonplaceholder.typicode.com/users' + '/' + id)
        .then(value => value.json())
    return userById
}

export const getPostById = async (id:number): Promise<IPost> =>{
    const postById = await fetch('https://jsonplaceholder.typicode.com/posts' + '/' + id)
        .then(value => value.json())
    return postById
}

export const getCommentById = async (id:number): Promise<IComment> =>{
    const commentById = await fetch('https://jsonplaceholder.typicode.com/comments' + '/' + id)
        .then(value => value.json())
    return commentById
}