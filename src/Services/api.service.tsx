import {IUser} from "@/Components/Models/IUser";
import {IPost} from "@/Components/Models/IPost";

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

export const getUserById = async(id:number): Promise<IUser> =>{
    const userById = await fetch ('https://jsonplaceholder.typicode.com/users' + '/' + id)
        .then(value => value.json())
    return userById
}