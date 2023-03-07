import twitter from "./Img/Twitter.svg";
import fb from "./Img/fb.svg"
import gmail from "./Img/gmail-icon.svg"
import pinterest from "./Img/Pinterest.svg"
import Reddit from "./Img/Reddit.svg"
import stack from "./Img/Stack Overflow.svg"
import whatsapp from "./Img/Whatsapp.svg"
import youtube from "./Img/Youtube.svg"





class SocialIconInfo {
    constructor(name, src) {
        this.name = name;
        this.src = src;
    }
}
const socialIcons = [new SocialIconInfo("twitter", pinterest)]

socialIcons.push(new SocialIconInfo("fb", pinterest))
socialIcons.push(new SocialIconInfo("gmail", pinterest))
socialIcons.push(new SocialIconInfo("pinterest", pinterest))
socialIcons.push(new SocialIconInfo("Reddit", Reddit))
socialIcons.push(new SocialIconInfo("Stack Overflow", stack))
socialIcons.push(new SocialIconInfo("whatsapp", whatsapp))
socialIcons.push(new SocialIconInfo("youtube", youtube))




export default socialIcons;