import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Values from "../../Values";

export default function RegistrationForm() {
  const [date, setDate] = useState(new Date().toLocaleDateString("en-GB"));

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
  const religionList = ["muslim", "hindu"];

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
  }, [country]);

  // handler

  const dateHandler = (e) => {
    setDate(e.target.value);
  };

  // user information

  const stateHandler = (e) => {
    setState(e.target.value);
  };
  const countryHandler = (e) => {
    setCountry(e.target.value);
  };

  const firstNameHandler = (e) => {
    setFirstName(e.target.value);
  };
  const lastNameHandler = (e) => {
    setLastName(e.target.value);
  };

  const phoneHandler = (e) => {
    setPhone(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const releatedHandler = (e) => {
    setReleated(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  // for personal Information

  const genderHandler = (e) => {
    setGender(e.target.value);
  };
  const adultHandler = (e) => {
    if (e.target.value === "yes") {
      setAdult(true);
    } else {
      setAdult(false);
    }
  };

  const fatherNameHandler = (e) => {
    setFatherName(e.target.value);
  };

  const motherNameHandler = (e) => {
    setMotherName(e.target.value);
  };

  const nationalityHandler = (e) => {
    setNationality(e.target.value);
  };

  const religionHandler = (e) => {
    setReligion(e.target.value);
  };

  const maritalStateHandler = (e) => {
    setMaritalState(e.target.value);
  };
  const professionHandler = (e) => {
    setProfession(e.target.value);
  };

  // for contact details

  const presentAddressHandler = (e) => {
    setPresentAddress(e.target.value);
  };

  const cityHandler = (e) => {
    setCity(e.target.value);
  };

  const postalCodeHandler = (e) => {
    setPostalCode(e.target.value);
  };

  // data handler

  const dataHandler = (userID) => {
    const data = {
      first_name: firstName,
      last_name: lastName,
      state,
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
    };

    const url = `${Values.BASE_URL}register_new_member`;
    console.log(data);

    axios
      .post(url, data)
      .then((d) => alert(d.data.message))
      .catch((e) => {
        console.log(e.response);
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

  return (
    <div className="registration-form">
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
              </div>

              <div className="input-grid">
                <input
                  type="text"
                  name="setFirstName"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => firstNameHandler(e)}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => lastNameHandler(e)}
                />
              </div>

              <div className="input-grid">
                <input
                  type="text"
                  name="name"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => phoneHandler(e)}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => emailHandler(e)}
                />
              </div>
              <div className="input-grid">
                <input
                  type="text"
                  name="releated"
                  placeholder="If you have releated enter code"
                  value={releated}
                  onChange={(e) => releatedHandler(e)}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => passwordHandler(e)}
                />
              </div>
            </div>

            {/* personal Information */}

            <div className="registration-personal">
              <div className="group-title">
                <h2>PERSONAL INFORMATION</h2>
              </div>

              <div className="radio-wrp">
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
              </div>

              <div className="radio-wrp">
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
              </div>

              <div className="input-grid">
                <input
                  type="text"
                  name="name"
                  placeholder="Father’s Name"
                  value={fatherName}
                  onChange={(e) => fatherNameHandler(e)}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Mother’s Name"
                  value={motherName}
                  onChange={(e) => motherNameHandler(e)}
                />
              </div>
              <div className="input-grid">
                <input
                  type="text"
                  name="name"
                  placeholder="Nationality"
                  value={nationality}
                  onChange={(e) => nationalityHandler(e)}
                />
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
              </div>

              <div className="radio-wrp">
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
              </div>

              {/* <div className="input-grid">
                <input
                  type="text"
                  name="name"
                  placeholder="National ID No."
                  value={nationalID}
                  onChange={(e) => nationalIdHandler(e)}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Driving License No."
                  value={drivingLicense}
                  onChange={(e) => drivingLicenseHandler(e)}
                />
              </div>

              <div className="input-grid">
                <input
                  type="text"
                  name="name"
                  placeholder="Tin No."
                  value={tinNo}
                  onChange={(e) => tinNoHandler(e)}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Passport No."
                  value={passportNo}
                  onChange={(e) => passportNoHandler(e)}
                />
              </div> */}
              <div className="input-grid">
                <input
                  type="text"
                  name="name"
                  placeholder="Profession"
                  value={profession}
                  onChange={(e) => professionHandler(e)}
                />
                {/* <input type="text" style={{ opacity: "0" }} /> */}
              </div>
            </div>

            <div className="registration-personal">
              <div className="group-title">
                <h2>CONTACT DETAILS</h2>
              </div>
              <div className="input-grid">
                <input
                  type="text"
                  name="name"
                  placeholder="Present Address"
                  value={presentAddress}
                  onChange={(e) => presentAddressHandler(e)}
                />
              </div>

              <div className="input-grid">
                <input
                  type="text"
                  name="name"
                  placeholder="City"
                  value={city}
                  onChange={(e) => cityHandler(e)}
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Postal Code"
                  value={postalCode}
                  onChange={(e) => postalCodeHandler(e)}
                />
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
  );
}
