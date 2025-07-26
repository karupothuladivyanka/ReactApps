import React,{useEffect, useState} from "react";
import axios from 'axios';

function Comment()
{
    let [comments,setComments]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then(response=>{setComments(response.data)})
        .catch(error=>console.log(`error fetching Comments : `,error))
    },[])
    return (
        <div>
            <h2>Comments List</h2>
            <table border="1px">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>BODY</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        comments.map((comment)=>(
                            <tr>
                                <td>{comment.id}</td>
                                <td>{comment.name}</td>
                                <td>{comment.email}</td>
                                <td>{comment.body}</td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>
        </div>
  );

}

export default Comment;

