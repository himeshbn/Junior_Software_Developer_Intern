import { useState } from "react";
import React, { useEffect } from "react";

function PostList() {
    let apiUrl = " https://jsonplaceholder.typicode.com/posts";

    let [posts, setPosts] = useState([]);
    function handleDel(delItem){
        ("Do you want to dlete thsi post?");
        posts = [...posts.filter((delId) => delId.id !== delItem)];
        setPosts(posts);
    }
    useEffect(() => {
        fetch(apiUrl)
            .then((response) => {
                if (!response.ok){
                    throw new Error('Network issue!!');
                }
                else {
                    console.log("Successfully fetched data");
                }
                return response.json();
            })

            .then((data) => {
                setPosts(data);
            })
            .catch((err) => {
                console.log("Oops! There is an error ");
            })
    }, []);

    return (
        <>
            <div class='container'>
                <h1>
                    Posts
                </h1>
                <table>
                    <thead>
                        <th> ID</th>
                        <th> Title</th>
                        <th> Body</th>
                        <th>Action</th>
                    </thead>

                    <tbody>
                        {posts.map((post) => (
                            <tr key={post.id}>
                                <td> {post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                                <td><button class='btn btn-danger' onClick={() => handleDel(post.id)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default PostList;