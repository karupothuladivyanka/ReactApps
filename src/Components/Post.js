import React,{useEffect, useState} from "react";
import axios from 'axios';
function Post()
{
    let [posts,setPosts]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response=>{setPosts(response.data)})
        .catch(error=>console.log(`error fetching posts : `,error))
    },[])
    return (
        <div>
            <h2>Posts List</h2>
            <table border="1px">
                <thead>
                    <tr>
                    <th>UserId</th>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.map((post)=>(
                            <tr>
                                <td>{post.userId}</td>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>
        </div>
  );

}

export default Post;







