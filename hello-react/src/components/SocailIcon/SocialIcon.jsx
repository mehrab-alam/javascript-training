import "./SocialIcon.css";

const SocialIcon = ({ name, iconsImg }) => (
    <div className="social-icons">
        <div className="social-img">
            <img src={iconsImg} alt="" /></div>
    </div>
)

export default SocialIcon;