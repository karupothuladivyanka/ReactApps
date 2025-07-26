import React,{useEffect, useState} from "react";
import axios from 'axios';


function Album()
{
    let [albums,setAlbums]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/albums")
        .then(response=>{setAlbums(response.data)})
        .catch(error=>console.log(`error fetching Comments : `,error))
    },[])
    return (
        <div>
            <h2>Albums List</h2>
            <table border="1px">
                <thead>
                    <tr>
                    <th>USERId</th>
                    <th>ID</th>
                    <th>TITLE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        albums.map((album)=>(
                            <tr>
                                <td>{album.userId}</td>
                                <td>{album.id}</td>
                                <td>{album.title}</td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>
        </div>
  );

}

export default Album;

