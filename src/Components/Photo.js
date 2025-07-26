import React,{useEffect, useState} from "react";
import axios from 'axios';
function Photo()
{
    let [photos,setPhotos]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/photos")
        .then(response=>{setPhotos(response.data)})
        .catch(error=>console.log(`error fetching posts : `,error))
    },[])
    return (
        <div>
            <h2>Photos List</h2>
            <table border="1px">
                <thead>
                    <tr>
                    <th>ALBUMId</th>
                    <th>Id</th>
                    <th>Title</th>
                    <th>URL</th>
                    <th>ThumbnailUrl</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        photos.map((photo)=>(
                            <tr>
                                <td>{photo.albumId}</td>
                                <td>{photo.id}</td>
                                <td>{photo.title}</td>
                                <td>{photo.url}</td>
                                <td>{photo.thumbnailUrl}</td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>
        </div>
  );

}

export default Photo;

