import "./Feed.css"
import Post from "./Post"
import MessageSender from "./MessageSender"
import StoryReel from "./StoryReel"
import db from "./firebase"
import {useState} from 'react'
import { useEffect } from "react"
function Feed (){
    const [posts ,setPosts] = useState([]);
    useEffect(() =>{
        db.collection('posts')
        .orderBy("timestamp" , "desc")
        .onSnapshot(snapshot =>{
            setPosts(snapshot.docs.map((doc) =>({id: doc.id, data: doc.data()})))
        })
    } , []);
    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender />
            {posts.map((post) => (
                <Post 
                key={post.id}
                image={post.data.image}
                profilePic={post.data.profilePic}
                timestamp={post.data.timestamp}
                username={post.data.username}
                message={post.data.message}
                />
            ))}
            
        </div>
    );
}
export default Feed;