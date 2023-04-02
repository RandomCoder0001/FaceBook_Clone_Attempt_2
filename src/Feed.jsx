import "./Feed.css"
import Post from "./Post"
import MessageSender from "./MessageSender"
import StoryReel from "./StoryReel"
function Feed (){
    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender />
            <Post 
            image ="https://assets.codepen.io/1480814/av+1.png"
            profilePic="https://assets.codepen.io/1480814/av+1.png"
            timestamp="15"
            username="Akshay"
            message= "hello world"
            />
        </div>
    );
}
export default Feed;