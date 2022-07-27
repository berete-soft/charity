import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Footer from "../layout/Footer"
import Values from '../Values'
import ChangeProfile from "./basic/ChangeProfile"
import Header from "./header/Header"
import Profile1 from "./Profile/Profile1"
import Profile2 from "./Profile/Profile2"
import Profile3 from "./Profile/Profile3"
import Profile4 from "./Profile/Profile4"
import Profile5 from "./Profile/Profile5"


export default function Profile() {
    const [isActive, setIsActive] =useState(false)
    const activeHandler =()=> {
        setIsActive(true)
    }
    const closeHandler =()=> {
        setIsActive(false)
    }

    const[links, setLinsks] = useState([
        {
            id: 1,
            name: "User Info"
        },
        {
            id: 2,
            name: "Dues"
        },
        {
            id: 5,
            name: "Donation"
        },
        {
            id: 3,
            name: "Personal Information"
        },
        {
            id: 4,
            name: "Address"
        },
    ])

    const [id, setId] = useState(1)
    const [userData, setUserData] = useState(null)

    const handler = (e) => {
        setId(e)
    }

    useEffect(()=> {
        const url = Values.BASE_URL+"profile";
        const token = localStorage.getItem('loginData')
        axios.get(url, {headers:{
            Authorization: `Bearer ${token}`,
        }}).then(d=>{
            setUserData(d.data.response)
        }).catch(e=> console.log(e.response))
    },[])

    


    return(
        <div className="profile">
            <div className="page-wrapper">
        <Header />


            <div className="profile-wrp">
                <div className="container">
                    <div className="profile-header">
                        <div className="profile-header-left">
                            <div className="profile-header-left-photo">
                                <img src={userData?.user.picture ||"https://media.istockphoto.com/vectors/male-user-icon-vector-id517998264?k=20&m=517998264&s=612x612&w=0&h=pdEwtkJlZsIoYBVeO2Bo4jJN6lxOuifgjaH8uMIaHTU="} alt="" />
                                <div className="change-photo">
                                    <Link onClick={activeHandler} to="">change Photo</Link>
                                </div>
                            </div>
                        </div>
                        <div className="profile-header-right">
                            <h3 className="">{userData && userData.user.name}</h3>
                            <strong>{userData && userData.personal_info.profession}</strong>
                        </div>
                    </div>

                    <div className="profile-body">
                        <div className="profile-body-left">
                            <ul className="profile-body-left-menu">
                                {
                                    links.map((data)=> (
                                        <li key={data.id} className={`profile-body-left-menu-item ${id === data.id &&  "active" || "" }`}>
                                            <button onClick={e=> handler(data.id)} className="profile-body-left-menu-link">{data.name}</button>
                                        </li>
                                    ))
                                }
                                
                            </ul>
                        </div>
                            <div className="profile-body-right">
                                {id=== 1 &&<Profile1 data={userData && userData.user} /> ||
                                 id===2 && <Profile2 data={userData && userData.finance} /> ||
                                 id===5 && <Profile5 data={userData && userData.finance} /> ||
                                  id===3 && <Profile3 data={userData && userData.personal_info} /> ||
                                   id===4 && <Profile4 data={userData && userData.address}  />}
                                
                            </div>   
                    </div>             
                </div>
            </div>   
        
   
  
                                
    <ChangeProfile  data={{isActive, activeHandler, closeHandler}}/>

        <Footer />
      </div>
        </div>
    )
}