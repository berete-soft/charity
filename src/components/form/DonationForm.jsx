import axios from "axios";
import { useEffect, useRef, useState } from "react";
import img1 from "../../assets/images/form/img-1.png";
import sliderImg from "../../assets/images/form/slider-img.png";
import Values from "../../Values";

export default function DonationForm() {
  const corporateRef = useRef();

  const isCorporate = (e) => {
    if (e.target.checked) {
      corporateRef.current.classList.remove("d-none");
    } else {
      corporateRef.current.classList.add("d-none");
    }
  };

  const [countriList, setContriList] = useState([]);
  const [stateList, setStateList] = useState([]);

  const [time, setTime] = useState("");
  const [amount, setAmount] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [corporateName, setCorporateName] = useState("");
  const [address1, setAddrese1] = useState("");
  const [address2, setAddrese2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [countri, setCountri] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const otherRef = useRef();

  useEffect(() => {
    // countri hadler

    const countriURL = `${Values.BASE_URL}countries`;
    axios
      .get(countriURL)
      .then((d) => {
        setContriList(d.data.response);
      })
      .catch((e) => {});

    // states API
    if (countri) {
      const urlState = `${Values.BASE_URL}${countri}/states`;

      axios
        .get(urlState)
        .then((d) => {
          setStateList(d.data.response);
        })
        .catch((e) => {});
    }
  }, [countri]);

  // handler

  const timeHandler = (e) => {
    setTime(e.target.value);
  };

  const amountHandler = (e) => {
    if (e.target.value === "other") {
      otherRef.current.disabled = false;
    } else {
      otherRef.current.disabled = true;
      setAmount(e.target.value);
    }
  };

  const otherHandler = (e) => {
    setAmount(e.target.value);
  };
  const firstNameHandler = (e) => {
    setFirstName(e.target.value);
  };
  const lastNameHandler = (e) => {
    setLastName(e.target.value);
  };
  const corporateNameHandler = (e) => {
    setCorporateName(e.target.value);
  };
  const address1Handler = (e) => {
    setAddrese1(e.target.value);
  };
  const address2Handler = (e) => {
    setAddrese2(e.target.value);
  };
  const cityHandler = (e) => {
    setCity(e.target.value);
  };
  const zipCodeHandler = (e) => {
    setZipCode(e.target.value);
  };
  const countriHandler = (e) => {
    setCountri(e.target.value);
  };

  const stateHander = (e) => {
    setState(e.target.value);
  };
  const phoneHandler = (e) => {
    setPhone(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  // submit handler

  const submitHandler = (e) => {
    e.preventDefault();

    window.location.href = "/payment";
  };

  return (
    <main className="donation">
      <div className="donation-header">
        <img src={sliderImg} alt="" />
      </div>
      <div className="donation-body">
        <div className="container">
          <div className="donation-body-left">
            <h2>Rest Assured</h2>
            <p>
              Our donation system's security measures keep your personal
              information safe.
            </p>
            <div className="img-wrp">
              <img src={img1} alt="" />
              <a href="/">bbb.org/charigy</a>
            </div>

            <h2>Good Stewardship</h2>
            <p>
              We take seriously our responsibility to contributors, to those
              counting on our help, and to God, to be wise stewards of funds
              entrusted to us. See our annual report and financial statement for
              more information.
            </p>
            <p>
              Manden Islamic Center is known as a tax-exempt 501(c)(3) nonprofit
              organization. Your gift is tax-deductible as allowed by law.
            </p>
            <p>
              Your gift will go where it is needed most, unless you specify a
              particular location or cause for it to be used. Designate your
              gift.
            </p>
          </div>
          <div className="donation-body-right">
            <form onSubmit={(e) => submitHandler(e)} action="" className="form">
              <p>
                <span>*</span> indicates requered field
              </p>

              <div className="check-group">
                <strong>Yes, I want to make a Donation for:</strong>
                <div className="input-group">
                  <input
                    type="radio"
                    name="time"
                    value="on Time"
                    id="ontime"
                    onChange={(e) => timeHandler(e)}
                  />
                  <label htmlFor="ontime">One time</label>
                </div>{" "}
                <strong>OR</strong>
                <div className="input-group">
                  <input
                    type="radio"
                    name="time"
                    id="monthly"
                    value="mounthly"
                    onChange={(e) => timeHandler(e)}
                  />
                  <label htmlFor="monthly">Monthly</label>
                </div>
              </div>
              <div className="group">
                <div className="input-group">
                  <input
                    type="radio"
                    name="quentity"
                    id="$10"
                    value="10"
                    onChange={(e) => amountHandler(e)}
                  />
                  <label htmlFor="$10">$10</label>
                </div>
                <div className="input-group">
                  <input
                    type="radio"
                    name="quentity"
                    id="$15"
                    value="15"
                    onChange={(e) => amountHandler(e)}
                  />
                  <label htmlFor="$15">$15</label>
                </div>
                <div className="input-group">
                  <input
                    type="radio"
                    name="quentity"
                    id="$20"
                    value="20"
                    onChange={(e) => amountHandler(e)}
                  />
                  <label htmlFor="$20">$20</label>
                </div>
                <div className="input-group">
                  <input
                    type="radio"
                    name="quentity"
                    id="$30"
                    value="30"
                    onChange={(e) => amountHandler(e)}
                  />
                  <label htmlFor="$30">$30</label>
                </div>
                <div className="input-group">
                  <input
                    type="radio"
                    name="quentity"
                    id="$50"
                    value="50"
                    onChange={(e) => amountHandler(e)}
                  />
                  <label htmlFor="$50">$50</label>
                </div>
                <div className="input-group">
                  <input
                    type="radio"
                    name="quentity"
                    id="$100"
                    value="100"
                    onChange={(e) => amountHandler(e)}
                  />
                  <label htmlFor="$100">$100</label>
                </div>
                <div className="input-group">
                  <input
                    type="radio"
                    name="quentity"
                    id="other"
                    value="other"
                    onChange={(e) => amountHandler(e)}
                  />
                  <label htmlFor="other">other</label>
                  <input
                    ref={otherRef}
                    onChange={(e) => otherHandler(e)}
                    type="text"
                    disabled="true"
                  />
                </div>
                <p>
                  Monthly giving is a great way to help those in need of decent
                  homes. You make a big impact over time through small gifts,
                  and Habitat has dependable funding while saving time and
                  resources on future renewals and appeals.
                </p>
              </div>
              <strong>Add Address Information</strong>
              <div className="group-1">
                <div className="input-group">
                  <label htmlFor="firstName">
                    <span>*</span>First Name:
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => firstNameHandler(e)}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="lastName">
                    <span>*</span>last Name:
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => lastNameHandler(e)}
                  />
                </div>
                <div className="checkbox">
                  <span>
                    Check if making a corporate contribution/donation.
                  </span>
                  <input
                    onChange={(e) => isCorporate(e)}
                    type="checkbox"
                    name="condition"
                    value="yas"
                    id="yes"
                  />
                  <label htmlFor="yes">Yes</label>
                </div>
                <div ref={corporateRef} className="input-group d-none">
                  <label htmlFor="address1">
                    <span>*</span>Corporete Name:
                  </label>
                  <input
                    type="text"
                    id="address1"
                    value={corporateName}
                    onChange={(e) => corporateNameHandler(e)}
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="address1">
                    <span>*</span>address 1:
                  </label>
                  <input
                    type="text"
                    id="address1"
                    value={address1}
                    onChange={(e) => address1Handler(e)}
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="address2">address 2:</label>
                  <input
                    type="text"
                    id="address2"
                    value={address2}
                    onChange={(e) => address2Handler(e)}
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="city">
                    <span>*</span>city:
                  </label>
                  <input
                    type="text"
                    id="city"
                    value={city}
                    onChange={(e) => cityHandler(e)}
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="zip">
                    <span>*</span>Zip Code:
                  </label>
                  <input
                    type="text"
                    id="zip"
                    onChange={(e) => zipCodeHandler(e)}
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="Country">
                    <span>*</span>Country:
                  </label>

                  <select
                    onChange={(e) => countriHandler(e)}
                    name="countri"
                    id=""
                  >
                    <option value=""> -- select country -- </option>
                    {countriList.map((d, i) => (
                      <option key={i} value={d}>
                        {" "}
                        {d}{" "}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="input-group">
                  <label htmlFor="state">
                    <span>*</span>state:
                  </label>
                  <select onChange={(e) => stateHander(e)} name="state" id="">
                    <option value=""> -- select state -- </option>
                    {stateList.map((d, i) => (
                      <option key={i} value={d.id}>
                        {" "}
                        {d.name}{" "}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="input-group">
                  <label htmlFor="phone">
                    <span>*</span>Phone Number:
                  </label>
                  <input
                    type="text"
                    id="phone"
                    value={phone}
                    onChange={(e) => phoneHandler(e)}
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="email">
                    <span>*</span>Email Address:
                  </label>
                  <input
                    type="text"
                    id="email"
                    onChange={(e) => emailHandler(e)}
                    value={email}
                  />
                </div>
              </div>

              <button type="submit">Make Payment</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
