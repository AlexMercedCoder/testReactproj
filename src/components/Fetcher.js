import React from 'react'

export const Fetcher = (props) => {

    //STATE
    const [posts, setPosts] = React.useState([])

    //useState
    React.useState(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data =>  {
            console.log(data)
            setPosts(data)
        })

    }, [])

    return posts.length > 0 ? (
        <>
        {posts.map(post =>( 
            <div>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
        ))}
        </>
    ) : <h1>...loading</h1>
}