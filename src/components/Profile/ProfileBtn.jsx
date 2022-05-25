import { Link } from "react-router-dom";

export default function ProfileBtn() {

    const logoutHanler = () => {
        localStorage.removeItem("loginData")
        location.replace('/');
    }
    return (
        <div className="profile-btn">
            <img src="https://media.istockphoto.com/vectors/male-user-icon-vector-id517998264?k=20&m=517998264&s=612x612&w=0&h=pdEwtkJlZsIoYBVeO2Bo4jJN6lxOuifgjaH8uMIaHTU=" alt="" />
            <div className="profile-links">
                <Link to="/profile" className="login-btn">
                   Profile
                </Link>
                <button onClick={logoutHanler}>Logout</button>
            </div>
        </div>
    )
}