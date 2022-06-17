import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import logo from "../../assets/images/logo.png";
import Values from "../../Values";
import Header from '../header/Header';

export default function RegistrationForm() {
  const [date, setDate] = useState(new Date().toLocaleDateString("en-GB"));
  const [errors, setErrors] = useState({})


  

  const tostSuccess = (message) => {
    toast.success(`${message}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const tostError = (message) => {
    toast.error(`${message}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  // user Information
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [releated, setReleated] = useState("");
  const [password, setPassword] = useState("");

  //personal Information

  const [gender, setGender] = useState("");
  const [adult, setAdult] = useState(false);
  const [fatherName, setFatherName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [nationality, setNationality] = useState("");
  const [religion, setReligion] = useState("");
  const [maritalState, setMaritalState] = useState("");
  const [profession, setProfession] = useState("");

  // conract Details
  const [presentAddress, setPresentAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const [countryList, setCountryList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const religionList = ["Muslim", "Christian","Jews", "Hindu", "Others"];

  const [data, setData] = useState({});

  useEffect(() => {
    const url = `${Values.BASE_URL}site_settings`;
    axios
      .get(url)
      .then((d) => {
        setData(d.data.response);
      })
      .catch((e) => {
        console.log(e);
      });
     

    // countris api
    const urlCountry = `${Values.BASE_URL}countries`;

    axios
      .get(urlCountry)
      .then((d) => {
        setCountryList(d.data.response);
      })
      .catch((e) => console.log(e.response));

    // states API
    if (country) {
      const urlState = `${Values.BASE_URL}${country}/states`;

      axios
        .get(urlState)
        .then((d) => {
          setStateList(d.data.response);
        })
        .catch((e) => {});
    }


    // errors handler


    
  }, [country]);


  // handler

  const dateHandler = (e) => {
    setDate(e.target.value);
  };

  // user information

  const stateHandler = (e) => {
    setState(e.target.value);

    // errors
    if(Object.keys(errors).indexOf("state")!== -1){
      delete errors["state"]
    }
  };
  const countryHandler = (e) => {
    setCountry(e.target.value);

    // errors
    if(Object.keys(errors).indexOf("country")!== -1){
      delete errors["country"]

    }
  };

  const firstNameHandler = (e) => {
    setFirstName(e.target.value);
    if(Object.keys(errors).indexOf("first_name")!== -1){
      delete errors["first_name"]

    }
  };
  const lastNameHandler = (e) => {
    setLastName(e.target.value);

    // errors
    if(Object.keys(errors).indexOf("last_name")!== -1){
      delete errors["last_name"]

    }
  };

  const phoneHandler = (e) => {
    // format
    const formatedPhoneNumver = formatPhoneNumber(e.target.value);
    setPhone(formatedPhoneNumver);

    // errors
    if(Object.keys(errors).indexOf("phone")!== -1){
      delete errors["phone"]
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);

    // errors
    if(Object.keys(errors).indexOf("email")!== -1){
      delete errors["email"]
    }
  };

  const releatedHandler = (e) => {
    setReleated(e.target.value);

    // errors
    if(Object.keys(errors).indexOf("releated")!== -1){
      delete errors["releated"]
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);

    // errors
    if(Object.keys(errors).indexOf("password")!== -1){
      delete errors["password"]
    }
  };

  // for personal Information

  const genderHandler = (e) => {
    setGender(e.target.value);

    // errors
    if(Object.keys(errors).indexOf("gender")!== -1){
      delete errors["gender"]
    }
  };
  const adultHandler = (e) => {
    if (e.target.value === "yes") {
      setAdult(true);
    } else {
      setAdult(false);
    }

    // errors
    if(Object.keys(errors).indexOf("adult")!== -1){
      delete errors["adult"]
    }
  };

  const fatherNameHandler = (e) => {
    setFatherName(e.target.value);

    // errors
    if(Object.keys(errors).indexOf("father_name")!== -1){
      delete errors["father_name"]
    }
  };

  const motherNameHandler = (e) => {
    setMotherName(e.target.value);

    // errors
    if(Object.keys(errors).indexOf("mother_name")!== -1){
      delete errors["mother_name"]
    }
  };

  const nationalityHandler = (e) => {
    setNationality(e.target.value);

    // errors
    if(Object.keys(errors).indexOf("nationality")!== -1){
      delete errors["nationality"]
    }
  };

  const religionHandler = (e) => {
    setReligion(e.target.value);

    // errors
    if(Object.keys(errors).indexOf("religion")!== -1){
      delete errors["religion"]
    }
  };

  const maritalStateHandler = (e) => {
    setMaritalState(e.target.value);

    // errors
    if(Object.keys(errors).indexOf("martial_status")!== -1){
      delete errors["martial_status"]
    }
  };
  const professionHandler = (e) => {
    setProfession(e.target.value);

    // errors
    if(Object.keys(errors).indexOf("profession")!== -1){
      delete errors["profession"]
    }
  };

  // for contact details

  const presentAddressHandler = (e) => {
    setPresentAddress(e.target.value);

    // errors
    if(Object.keys(errors).indexOf("present_address")!== -1){
      delete errors["present_address"]
    }
  };

  const cityHandler = (e) => {
    setCity(e.target.value);

    // errors
    if(Object.keys(errors).indexOf("city")!== -1){
      delete errors["city"]
    }
  };

  const postalCodeHandler = (e) => {
    setPostalCode(e.target.value);

    // errors
    if(Object.keys(errors).indexOf("postal_code")!== -1){
      delete errors["postal_code"]
    }
  };

  // data handler

  const dataHandler = (userID) => {
    const data = {
      first_name: firstName,
      last_name: lastName,
      state,
      country,
      email,
      phone,
      password,
      releated: userID,

      adult,
      gender,
      father_name: fatherName,
      mother_name: motherName,
      membership_type: "Premium",
      nationality,
      religion,
      martial_status: maritalState,
      profession,

      present_address: presentAddress,
      postal_code: postalCode,
      city,
      place_birth: "11-06-2001",
    };

    const url = `${Values.BASE_URL}register_new_member`;

    axios
      .post(url, data, {
        headers: {
          "X-CSRF-TOKEN": "tokenvasdasdaluetobeinserted235kwgeiOIulgsk",
        },
      })
      .then((d) => {
        tostSuccess(d.data.message);
        location.reload();
        // alert(d.data.message)
      })
      .catch((e) => {
        setErrors(e.response.data.errors);
        tostError(e.response.data.message);
        // alert("Please fill up all fields");
      });
  };

  // submit hander

  const submitHandler = (e) => {
    e.preventDefault();

    if (releated) {
      const releatedURL = `${Values.BASE_URL}member/${releated.trim()}`;

      axios
        .get(releatedURL)
        .then((d) => {
          const userId = d.data.response.info.user_id;
          dataHandler(userId);
        })
        .catch((e) => {
          alert("Invalid Releated code!");
          console.log(releatedURL);
        });
    } else {
      dataHandler();
    }
  };


 const formatPhoneNumber=(value) => {
   if(!value) return value;
   const phoneNumber = value.replace(/[^\d]/g, '');
   const phoneNumberLenght = phoneNumber.length;

   if(phoneNumberLenght < 4) return phoneNumber;

   if(phoneNumberLenght < 7) {
     return`(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`
   }

   return`(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3,6)}-${phoneNumber.slice(6, 10)}`
 }



  return (
    <>
    <Header />
    <div className="registration-form">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="registration-form-header">
        <div className="container">
          <div className="registration-form-header-logo">
            <Link to="/">
              <img src={data.site_logo || logo} alt="" />
            </Link>
          </div>
          <div className="registration-form-header-body">
            <div className="title">
              <h2>{data.site_organization_name}</h2>
            </div>
            <div className="address">
              <p>{data.site_address}</p>
            </div>
            <div className="phone">
              <p>
                {data.site_phone_one} | {data.site_phone_two}
              </p>
            </div>
            <div className="email">
              <p>{data.site_email} | www.websitename.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="registration-form-body">
        <div className="container">
          <div className="title">
            <h2>REGISTRATION FORM</h2>
          </div>
          <form
            onSubmit={(e) => submitHandler(e)}
            action=""
            className="registration"
          >
            <div className="registration-header">
              <label htmlFor="date" className="date-label">
                Date:
              </label>
              <input
                id="date"
                type="text"
                value={date}
                placeholder="Date"
                className="date"
                onChange={(e) => dateHandler(e)}
              />
            </div>

            {/* user Information  */}
            <div className="registration-personal">
              <div className="group-title">
                <h2>User Details</h2>
              </div>
              
              <div className="input-grid">
                <div className={`input-item ${Object.keys(errors).indexOf("first_name")!== -1 && "error"|| ""}`}>
                <input
                  type="text"
                  name="setFirstName"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => firstNameHandler(e)}
                />
                <span className="">{Object.keys(errors).indexOf("first_name")!== -1 && errors.first_name[0]}</span>
                </div>
                
                <div className={`input-item ${Object.keys(errors).indexOf("last_name")!== -1 && "error"|| ""}`}>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => lastNameHandler(e)}
                />
                <span className="">{Object.keys(errors).indexOf("last_name")!== -1 && errors.last_name[0]}</span>
                </div>
              </div>

              <div className="input-grid">
              <div className={`input-item ${Object.keys(errors).indexOf("phone")!== -1 && "error"|| ""}`}>
                <input
                  id="phone"
                  type="tel"
                  name="name"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => phoneHandler(e)}
                />
                <span className="">{Object.keys(errors).indexOf("phone")!== -1 && errors.phone[0]}</span>
                </div>

                <div className={`input-item ${Object.keys(errors).indexOf("email")!== -1 && "error"|| ""}`}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => emailHandler(e)}
                />
                <span className="">T{Object.keys(errors).indexOf("email")!== -1 && errors.email[0]}</span>
                </div>
              </div>
              <div className="input-grid">

              <div className={`input-item ${Object.keys(errors).indexOf("releated")!== -1 && "error"|| ""}`}>
                <input
                  type="text"
                  name="releated"
                  placeholder="If you have releated enter code"
                  value={releated}
                  onChange={(e) => releatedHandler(e)}
                />
                <span className="">{Object.keys(errors).indexOf("releated")!== -1 && errors.releated[0]}</span>
                </div>

                <div className={`input-item ${Object.keys(errors).indexOf("password")!== -1 && "error"|| ""}`}>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => passwordHandler(e)}
                />
                <span className="">{Object.keys(errors).indexOf("password")!== -1 && errors.password[0]}</span>
                </div>
              </div>
            </div>

            {/* personal Information */}

            <div className="registration-personal">
              <div className="group-title">
                <h2>PERSONAL INFORMATION</h2>
              </div>

              <div className="radio-wrp">
              <div className={`input-item ${Object.keys(errors).indexOf("gender")!== -1 && "error"|| ""}`}>
                <span>Gender:</span>
                <div className="radio-group">
                  <label htmlFor="male">Male</label>
                  <input
                    type="radio"
                    name="gender"
                    id="male"
                    value="male"
                    onChange={(e) => genderHandler(e)}
                  />
                </div>
                <div className="radio-group">
                  <label htmlFor="female">Female</label>
                  <input
                    type="radio"
                    name="gender"
                    id="female"
                    value="female"
                    onChange={(e) => genderHandler(e)}
                  />
                </div>
                <span className="error-message">{Object.keys(errors).indexOf("gender")!== -1 && errors.gender[0]}</span>
                </div>
              </div>

              <div className="radio-wrp">
              <div className={`input-item ${Object.keys(errors).indexOf("adult")!== -1 && "error"|| ""}`}>
                <span>Are you adult?</span>
                <div className="radio-group">
                  <label htmlFor="on18">Yes</label>
                  <input
                    type="radio"
                    name="age"
                    id="on18"
                    value="yes"
                    onChange={(e) => adultHandler(e)}
                  />
                </div>
                <div className="radio-group">
                  <label htmlFor="under18">No</label>
                  <input
                    type="radio"
                    name="age"
                    id="under18"
                    value="no"
                    onChange={(e) => adultHandler(e)}
                  />
                </div>
                <span className="error-message">{Object.keys(errors).indexOf("adult")!== -1 && errors.adult[0]}</span>
                </div>
              </div>

              <div className="input-grid">
              <div className={`input-item ${Object.keys(errors).indexOf("father_name")!== -1 && "error"|| ""}`}>
                <input
                  type="text"
                  name="name"
                  placeholder="Father’s Name"
                  value={fatherName}
                  onChange={(e) => fatherNameHandler(e)}
                />
                <span className="">{Object.keys(errors).indexOf("father_name")!== -1 && errors.father_name[0]}</span>
                </div>

                <div className={`input-item ${Object.keys(errors).indexOf("mother_name")!== -1 && "error"|| ""}`}>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Mother’s Name"
                  value={motherName}
                  onChange={(e) => motherNameHandler(e)}
                />
                <span className="">{Object.keys(errors).indexOf("mother_name")!== -1 && errors.mother_name[0]}</span>
                </div>
              </div>
              <div className="input-grid">

              <div className={`input-item ${Object.keys(errors).indexOf("nationality")!== -1 && "error"|| ""}`}>
                <input
                  type="text"
                  name="name"
                  placeholder="Nationality"
                  value={nationality}
                  onChange={(e) => nationalityHandler(e)}
                />
                <span className="">{Object.keys(errors).indexOf("nationality")!== -1 && errors.nationality[0]}</span>
                </div>

                <div className={`input-item ${Object.keys(errors).indexOf("religion")!== -1 && "error"|| ""}`}>
                <select
                  type="text"
                  name="name"
                  placeholder="Present Address"
                  onChange={(e) => religionHandler(e)}
                >
                  <option> -- Select Religion -- </option>
                  {religionList.map((d, i) => (
                    <option key={i} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
                <span className="">{Object.keys(errors).indexOf("religion")!== -1 && errors.religion[0]}</span>
                </div>   

              </div>

              <div className="radio-wrp">
              <div className={`input-item ${Object.keys(errors).indexOf("martial_status")!== -1 && "error"|| ""}`}>
                <span>Marital Status:</span>
                <div className="radio-group">
                  <label htmlFor="Married">Married</label>
                  <input
                    type="radio"
                    name="marrital-status"
                    id="Married"
                    value="married"
                    onChange={(e) => maritalStateHandler(e)}
                  />
                </div>
                <div className="radio-group">
                  <label htmlFor="Unmarried">Unmarried</label>
                  <input
                    type="radio"
                    name="marrital-status"
                    id="Unmarried"
                    value="unmarried"
                    onChange={(e) => maritalStateHandler(e)}
                  />
                </div>
                <span className="error-message">{Object.keys(errors).indexOf("martial_status")!== -1 && errors.martial_status[0]}</span>
                </div>
              </div>

             
              <div className="input-grid">
              <div className={`input-item ${Object.keys(errors).indexOf("profession")!== -1 && "error"|| ""}`}>
                <input
                  type="text"
                  name="name"
                  placeholder="Profession"
                  value={profession}
                  onChange={(e) => professionHandler(e)}
                />
                <span className="">T{Object.keys(errors).indexOf("profession")!== -1 && errors.profession[0]}</span>
                </div>
                {/* <input type="text" style={{ opacity: "0" }} /> */}
              </div>
            </div>

            <div className="registration-personal">
              <div className="group-title">
                <h2>CONTACT DETAILS</h2>
              </div>
              <div className="input-grid">
              <div className={`input-item ${Object.keys(errors).indexOf("present_address")!== -1 && "error"|| ""}`}>
                <input
                  type="text"
                  name="name"
                  placeholder="Present Address"
                  value={presentAddress}
                  onChange={(e) => presentAddressHandler(e)}
                />
                <span className="">{Object.keys(errors).indexOf("present_address")!== -1 && errors.present_address[0]}</span>
                </div>
              </div>

              <div className="input-grid">
              <div className={`input-item ${Object.keys(errors).indexOf("city")!== -1 && "error"|| ""}`}>
                <input
                  type="text"
                  name="name"
                  placeholder="City"
                  value={city}
                  onChange={(e) => cityHandler(e)}
                />
                <span className="">T{Object.keys(errors).indexOf("city")!== -1 && errors.city[0]}</span>
                </div>
                <div className={`input-item ${Object.keys(errors).indexOf("postal_code")!== -1 && "error"|| ""}`}>
                <input
                  type="text"
                  name="name"
                  placeholder="Postal Code"
                  value={postalCode}
                  onChange={(e) => postalCodeHandler(e)}
                />
                <span className="">{Object.keys(errors).indexOf("postal_code")!== -1 && errors.postal_code[0]}</span>
                </div>
              </div>
              <div className="input-grid">
              <div className={`input-item ${Object.keys(errors).indexOf("country")!== -1 && "error"|| ""}`}>
                <select
                  type="text"
                  name="countris"
                  onChange={(e) => countryHandler(e)}
                >
                  <option> -- Select Country -- </option>
                  {countryList.map((countri, i) => (
                    <option key={i} value={countri}>
                      {" "}
                      {countri}{" "}
                    </option>
                  ))}
                </select>
                <span className="">{Object.keys(errors).indexOf("country")!== -1 && errors.country[0]}</span>
                </div>

                <div className={`input-item ${Object.keys(errors).indexOf("state")!== -1 && "error"|| ""}`}>
                <select
                  type="text"
                  name="name"
                  onChange={(e) => stateHandler(e)}
                >
                  <option> -- Select State -- </option>
                  {stateList.map((d, i) => (
                    <option value={d.id} key={i}>
                      {d.name}{" "}
                    </option>
                  ))}
                </select>
                <span className="">{Object.keys(errors).indexOf("state")!== -1 && errors.state[0]}</span>
                </div>

              </div>

            </div>

            <div className="notic">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </p>
            </div>

            <button type="submit" className="thm-btn dynamic-radius">
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="registration-form-footer"></div>
    </div>
    </>
  );
}
