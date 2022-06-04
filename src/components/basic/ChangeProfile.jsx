import axios from "axios"
import { useEffect, useState } from "react"
import Values from "../../Values"

export default function ChangeProfile({data}) {

   
    const [picture, setPicture] = useState(null)
    const [file, setFile] = useState(null)
    
    const fileHandler = (e)=> {
        setFile(e.target.files[0])
    }

   useEffect(()=> {
    if (file) {
        function getData(audioFile, callback) {
          var reader = new FileReader();
          reader.onload = function (event) {
            var data = event.target.result.split(","),
              decodedImageData = btoa(data[1]); // the actual conversion of data from binary to base64 format
            callback(decodedImageData);
            setPicture(data.join(","));
          };
          reader.readAsDataURL(audioFile);
        }
        getData(file, () => {
          
        });
      }
   },[file])



    const submitHandler = (e) =>{
        e.preventDefault()
        const URL = `${Values.BASE_URL}profile-picture-update`
        const token = localStorage.getItem("loginData");

        
        
        console.log(picture)
        if(file) {
            axios.post(URL, picture, {
                headers: {
                    Authorization: `Bearer ${token}`,
                  },
            }).then(d=>{
                data.closeHandler()
            }).catch(e=>{
                console.log(URL)
                console.log(e.response)
            })
        }else{
            alert("upload a profile photo")
        }
    }


    return (
        <div className={`profile-change-form ${data.isActive &&"active"|| ""}`}>
            <form onSubmit={e=> submitHandler(e)} action="">
                <label htmlFor="profile">Upload Your Photo:</label>
                <input accept="image/*" onChange={e=>fileHandler(e)} type="file" />
                <button type="submit">Update</button>
            </form>
            <div onClick={data.closeHandler} className="close">X</div>
        </div>
    )
}