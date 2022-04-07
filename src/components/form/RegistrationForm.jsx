import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Values from "../../Values";

export default function RegistrationForm() {
  const [date, setDate] = useState(new Date().toLocaleDateString("en-GB"));
  // const [membership, setMembership] = useState("");

  //personal Information
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [birthPlace, setBirthPlace] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [nationality, setNationality] = useState("");
  const [religion, setReligion] = useState("");
  const [residentState, setResidentState] = useState("");
  const [maritalState, setMaritalState] = useState("");
  // const [nationalID, setNationalID] = useState("");
  // const [drivingLicense, setDrivingLicense] = useState("");
  // const [tinNo, setTinNo] = useState("");
  // const [passportNo, setPassportNo] = useState("");
  const [profession, setProfession] = useState("");

  // conract Details
  const [presentAddress, setPresentAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    const url = `${Values.BASE_URL}countries`;
    axios
      .get(url)
      .then((d) => {
        setCountryList(d.data.response);
      })
      .catch((e) => {
        console.log(e);
      });

    const date = new Date().toLocaleDateString("en-GB");
  }, []);

  // handler

  const dateHandler = (e) => {
    setDate(e.target.value);
  };

  // const membershipHandler = (e) => {
  //   setMembership(e.target.value);
  // };

  // for personal Information
  const firstNameHandler = (e) => {
    setFirstName(e.target.value);
  };
  const lastNameHandler = (e) => {
    setLastName(e.target.value);
  };

  const genderHandler = (e) => {
    setGender(e.target.value);
  };

  const birthDateHandler = (e) => {
    setBirthDate(e.target.value);
  };

  const birthPlaceHandler = (e) => {
    setBirthPlace(e.target.value);
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

  const residentStateHandler = (e) => {
    setResidentState(e.target.value);
  };

  const maritalStateHandler = (e) => {
    setMaritalState(e.target.value);
  };

  // const nationalIdHandler = (e) => {
  //   setNationalID(e.target.value);
  // };

  // const drivingLicenseHandler = (e) => {
  //   setDrivingLicense(e.target.value);
  // };

  // const tinNoHandler = (e) => {
  //   setTinNo(e.target.value);
  // };

  // const passportNoHandler = (e) => {
  //   setPassportNo(e.target.value);
  // };

  // for contact details

  const presentAddressHandler = (e) => {
    setPresentAddress(e.target.value);
  };

  const cityHandler = (e) => {
    setCity(e.target.value);
  };

  const stateHandler = (e) => {
    setState(e.target.value);
  };

  const postalCodeHandler = (e) => {
    setPostalCode(e.target.value);
  };

  const countryHandler = (e) => {
    setCountry(e.target.value);
  };

  const phoneHandler = (e) => {
    setPhone(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const professionHandler = (e) => {
    setProfession(e.target.value);
  };

  // submit hander

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      first_name: firstName,
      last_name: lastName,
      gender,
      place_birth: birthPlace,
      father_name: fatherName,
      mother_name: motherName,
      // membership_type: membership,
      nationality,
      religion,
      resident_status: residentState,
      martial_status: maritalState,
      profession,
      present_address: presentAddress,
      postal_code: postalCode,
      city,
      state,
      country,
      phone,
    };
    const url = `${Values.BASE_URL}register_new_member`;

    axios
      .post(url, data)
      .then((d) => alert(d.data.message))
      .catch((e) => {
        // console.log(e.response.data.errors);
        alert("Please fill up all fields");
      });
  };

  return (
    <div className="registration-form">
      <div className="registration-form-header">
        <div className="container">
          <div className="registration-form-header-logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="registration-form-header-body">
            <div className="title">
              <h2>AMU ISLAMIC CENTER</h2>
            </div>
            <div className="address">
              <p>S 104 Rose Street, Paradis City 50047</p>
            </div>
            <div className="phone">
              <p>+ 0123 456 789 | + 0123 456 789</p>
            </div>
            <div className="email">
              <p>mailaccount@gmail.com | www.websitename.com</p>
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
              {/* <div className="radio-wrp">
                <span>Membership Type</span>
                <div className="radio-group">
                  <input
                    type="radio"
                    name="membership"
                    id="regular"
                    value="regular"
                    onChange={(e) => membershipHandler(e)}
                  />
                  <label htmlFor="regular">Regular</label>
                </div>
                <div className="radio-group">
                  <input
                    type="radio"
                    name="membership"
                    id="premium"
                    value="premium"
                    onChange={(e) => membershipHandler(e)}
                  />
                  <label htmlFor="premium">Premium</label>
                </div>
                <div className="radio-group">
                  <input
                    type="radio"
                    name="membership"
                    id="vip"
                    value="vip"
                    onChange={(e) => membershipHandler(e)}
                  />
                  <label htmlFor="vip">Vip</label>
                </div>
              </div> */}
            </div>
            <div className="registration-personal">
              <div className="group-title">
                <h2>PERSONAL INFORMATION</h2>
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
              <div className="input-grid">
                <input
                  type="text"
                  name="name"
                  placeholder="Date of Birth"
                  value={birthDate}
                  onChange={(e) => birthDateHandler(e)}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Place of Birth"
                  value={birthPlace}
                  onChange={(e) => birthPlaceHandler(e)}
                />
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
                <input
                  type="text"
                  name="lastName"
                  placeholder="Religion"
                  value={religion}
                  onChange={(e) => religionHandler(e)}
                />
              </div>

              <div className="radio-wrp">
                <span>Resident Status: </span>
                <div className="radio-group">
                  <label htmlFor="Resident">Resident</label>
                  <input
                    type="radio"
                    name="Resident-Status"
                    id="Resident"
                    value="resident"
                    onChange={(e) => residentStateHandler(e)}
                  />
                </div>
                <div className="radio-group">
                  <label htmlFor="Non-Resident">Non-Resident</label>
                  <input
                    type="radio"
                    name="Resident-Status"
                    id="Non-Resident"
                    value="non-resident"
                    onChange={(e) => residentStateHandler(e)}
                  />
                </div>
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
                  name="lastName"
                  placeholder="State"
                  value={state}
                  onChange={(e) => stateHandler(e)}
                />
              </div>

              <div className="input-grid">
                <input
                  type="text"
                  name="name"
                  placeholder="Postal Code"
                  value={postalCode}
                  onChange={(e) => postalCodeHandler(e)}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Country"
                  value={country}
                  onChange={(e) => countryHandler(e)}
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
                  type="text"
                  name="lastName"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => emailHandler(e)}
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
