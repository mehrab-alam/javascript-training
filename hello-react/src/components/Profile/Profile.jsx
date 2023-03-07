import "./Profile.css";

const Profile = ({ image, name, position, companyName, country }) => (

    <div className="profile">
        <div>
            <div className='profile-img'><img src={image} alt="profile" /></div>
            <h1>
                {name}
            </h1>
            <p>
                {position} at {companyName} <br /> lives in {country}
            </p>

        </div>

    </div>

);



export default Profile;