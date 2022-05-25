import { useState } from "react"
import Footer from "../layout/Footer"
import Header from "./header/Header"


export default function Profile() {

    const[links, setLinsks] = useState([
        {
            id: 1,
            name: "User Info"
        },
        {
            id: 2,
            name: "Finance"
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

    const handler = (e) => {
        setId(e)
    }


    return(
        <div className="profile">
            <div className="page-wrapper">
        <Header />


            <div className="profile-wrp">
                <div className="container">
                    <div className="profile-header">
                        <div className="profile-header-left">
                            <div className="profile-header-left-photo">
                                <img src="https://media.istockphoto.com/vectors/male-user-icon-vector-id517998264?k=20&m=517998264&s=612x612&w=0&h=pdEwtkJlZsIoYBVeO2Bo4jJN6lxOuifgjaH8uMIaHTU=" alt="" />
                            </div>
                        </div>
                        <div className="profile-header-right">
                            <h3 className="">Kshiti Ghelami</h3>
                            <strong> Web Developer and Designer</strong>
                        </div>
                    </div>

                    <div className="profile-body">
                        <div className="profile-body-left">
                            <ul className="profile-body-left-menu">
                                {
                                    links.map((data)=> (
                                        <li key={data} className={`profile-body-left-menu-item ${id === data.id &&  "active" || "" }`}>
                                            <button onClick={e=> handler(data.id)} className="profile-body-left-menu-link">{data.name}</button>
                                        </li>
                                    ))
                                }
                                
                            </ul>
                        </div>
                            <div className="profile-body-right">
                                
                            </div>   
                    </div>             
                </div>
            </div>   
        
   
  
  

    

        <Footer />
      </div>
        </div>
    )
}