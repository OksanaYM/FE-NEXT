import Link from "next/link";


export const Menu = () =>{
    return(
        <div className={'menu'}>
            <ul>
                <li>
                    <Link href={'/'}>HOME</Link>
                </li>
                <li>
                    <Link href={'/users'}>USERS</Link>
                </li>
                <li>
                    <Link href={'/posts'}>POSTS</Link>
                </li>
                <li>
                    <Link href={'/comments'}>COMMENTS</Link>
                </li>
            </ul>
        </div>
    )
}