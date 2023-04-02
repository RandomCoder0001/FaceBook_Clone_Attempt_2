import Story from "./Story";
import "./StoryReel.css"
function StoryReel(){
    return (
        <div className="storyreel">
            <Story 
            image = "http://m.gettywallpapers.com/wp-content/uploads/2020/05/The-Weeknd-iPhone-Wallpaper.jpg"
            profileSrc="https://assets.codepen.io/1480814/av+1.png"
            title="Known"
            />
            <Story
            image = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEglVpEY6SHMdXXq76pTXLmE51xRLstPTYECz3QzLqxcDO4MoBpXFa_KBaxQd0bHWCY5GzQhZqyDqO0zHWYB3LDNdCIRri_RfqayRSp7Rr0Tuilz-a82ZQdVNS-q_RmrV3LK27E6t9ed9sSd2ezOhC_p9cejLXrIDXkYLNHl2I1DxafefJ35nSrom92lDA/s3024/IOS-16-IPHONE-14-WALLPAPER.webp"
            profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJELdk6Noobs_JmzNiN6hkPlVi-oLRIrS5Tw&usqp=CAU"
            title="Unknown"
            />
            <Story
            image = "https://wallpapercave.com/dwp1x/wp5144956.jpg"
            profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQta8vR1Oowr9VPbGQNmK0vZ9ECH6ikaC1-Wg&usqp=CAU"
            title="Rupesh babu"
            />
            <Story
            image = "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            profileSrc="https://www.gethucinema.com/wp-content/uploads/2022/06/BhumiPednekar-2569.jpg"
            title="Cyber Tinny"
            />
            <Story
            image = "https://mfiles.alphacoders.com/900/900913.jpg"
            title="xyz"
            />
        </div>
    );
}
export default StoryReel;