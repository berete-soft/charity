import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { FaRegCreditCard, FaUserAlt } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import img1 from "../../assets/images/form/img-1.png";
import img4 from "../../assets/images/form/img5.png";
import img5 from "../../assets/images/form/img6.jpg";
import sliderImg from "../../assets/images/form/slider-img.png";
import { ThemeContext } from "../../context/ThemeContext";
import Values from "../../Values";
import Header from "../header/Header";

export default function DonationForm() {
  const corporateRef = useRef();
  const context = useContext(ThemeContext);

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
    });
  };

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

  // payment system

  const paymentType = document.querySelectorAll(".payment-type");
  const paymentOption = document.querySelectorAll(
    ".payment-body-left-card-body"
  );
  const [paymentMethod, setPaymentMethod] = useState("");

  for (let i = 0; i < paymentType.length; i++) {
    paymentType[i].addEventListener("change", (e) => {
      setPaymentMethod(e.target.value);
      for (let j = 0; j < paymentOption.length; j++) {
        paymentOption[j].classList.add("height-0");
      }
      paymentOption[i].classList.remove("height-0");
    });
  }

  const [transactionNumBank, setTransactionNumBank] = useState("");
  const [transactionNumZelle, setTransactionNumZelle] = useState("");
  const [checkNum, setCheckNum] = useState("");
  const [reciverName, setReciverName] = useState("");
  const [reciverPhone, setReciverPhone] = useState("");

  
  const [paymentInfo, setPaymentInfo] = useState([]);

  // transaction handler
  const transactionNumBankHandler = (e) => {
    setTransactionNumBank(e.target.value);
  };
  const transactionNumZelleHandler = (e) => {
    setTransactionNumZelle(e.target.value);
  };
  const checkNumHandler = (e) => {
    setCheckNum(e.target.value);
  };
  const reciverNameHandler = (e) => {
    setReciverName(e.target.value);
  };
  const reciverPhoneHandler = (e) => {
    setReciverPhone(e.target.value);
  };

  // submit handler

  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
      first_name: firstName,
      last_name: lastName,
      corporate_name: corporateName,
      address_1: address1,
      address_2: address2,
      city,
      country: countri,
      state_id: state,
      phone,
      email,
      donation_type: time,
      amount,
      method: 1,
      info: {
        paymentMethod,
        transactionNumBank,
        checkNum,
        transactionNumZelle,
        reciverName,
        reciverPhone,
      },
    };

    // api system
    const POSTURL = `${Values.BASE_URL}guest-payments`;
    axios
      .post(POSTURL, data)
      .then((d) => {
        if(paymentMethod === 'stripe'){
          window.location.href = `${Values.BASE_URL}payment/process-stripe/${d.data.payment_id}`;
        } else if(paymentMethod === 'paypal'){
          window.location.href = `${Values.BASE_URL}payment/process-paypal/${d.data.payment_id}`;
        } else{
          tostSuccess(d.data.message);
          location.reload();
        }
      })
      .catch((e) => {
        tostError(e.response.data.message);
      });
  };
  const getPaymentInfo = async() => {
    const res =  await axios.get(`${Values.BASE_URL}get/paymentinfo`);
    setPaymentInfo(res.data);
  }

  useEffect(() => {
    getPaymentInfo();
  }, []);

  return (
    <>
    <Header />
    <main className="donation">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
                    type="email"
                    id="email"
                    onChange={(e) => emailHandler(e)}
                    value={email}
                  />
                </div>
              </div>

              {/* payment information */}
              <br />

              <div className="payment-body-laft-card-wrp">
                <div className="payment-body-left-card">
                  <div className="">
                    <input
                      type="radio"
                      name="payment"
                      id="credit"
                      className="payment-type"
                      value="bankTransfer"
                    />
                    <label htmlFor="credit">Bank Transfer</label>
                  </div>
                  <div className="img"></div>
                </div>
                <div className="payment-body-left-card-body height-0">
                  <div className="left">
                    <p>Bank Name: CHASE BANK</p>
                    <p>Acount Number: 87475987423</p>
                    <p>Routing Number: 347892383497</p>
                    <div className="input-group">
                      <input
                        type="text"
                        name="bankInfo"
                        placeholder="Transaction number"
                        onChange={(e) => transactionNumBankHandler(e)}
                      />
                    </div>
                  </div>
                  <div className="right">
                    <img src={img4} alt="" />
                  </div>
                </div>
              </div>

              <div className="payment-body-laft-card-wrp">
                <div className="payment-body-left-card">
                  <div className="">
                    <input
                      type="radio"
                      name="payment"
                      id="credit"
                      className="payment-type"
                      value="checkPayment"
                    />
                    <label htmlFor="credit">Check Payment</label>
                  </div>
                  <div className="img"></div>
                </div>
                <div className="payment-body-left-card-body height-0">
                  <div className="left">
                    <p>
                      <strong>Please Pay to:</strong> manden islamic Center
                    </p>
                    <div className="input-group">
                      <input
                        type="text"
                        placeholder="Enter check Number"
                        onChange={(e) => checkNumHandler(e)}
                      />
                    </div>
                  </div>
                  <div className="right">
                    <img src={img5} alt="" />
                  </div>
                </div>
              </div>

              <div className="payment-body-laft-card-wrp">
                <div className="payment-body-left-card">
                  <div className="">
                    <input
                      type="radio"
                      name="payment"
                      id="credit"
                      className="payment-type"
                      value="zellePayment"
                    />
                    <label htmlFor="credit">Zelle Payment</label>
                  </div>
                  <div className="img"></div>
                </div>
                <div className="payment-body-left-card-body height-0">
                  <div className="left">
                    <p>
                      <strong>Email:</strong> pay@gmail.com
                    </p>
                    <p>
                      <strong>Phone:</strong> 7287439873
                    </p>

                    <div className="input-group">
                      <input
                        type="text"
                        name="zelleInfo"
                        placeholder="Transaction number"
                        onChange={(e) => transactionNumZelleHandler(e)}
                      />
                    </div>
                  </div>
                  <div className="right"></div>
                </div>
              </div>

              <div className="payment-body-left-card-wrp">
                <div className="payment-body-left-card">
                  <div className="">
                    <input
                      type="radio"
                      name="payment"
                      id="credit"
                      className="payment-type"
                      value="chaspayment"
                    />
                    <label htmlFor="credit">Cash Payment</label>
                  </div>
                  <div className="img"></div>
                </div>
                <div className="payment-body-left-card-body height-0">
                  <div className="left">
                    <div className="input-group">
                      <input
                        type="text"
                        placeholder="Enter Full Name of the Reciver"
                        onChange={(e) => reciverNameHandler(e)}
                      />
                      <span>
                        <FaUserAlt />
                      </span>
                    </div>
                    <div className="input-group">
                      <input
                        type="text"
                        placeholder="Ender Reciver Phone Number"
                        onChange={(e) => reciverPhoneHandler(e)}
                      />
                      <span>
                        <FaRegCreditCard />
                      </span>
                    </div>
                  </div>
                  <div className="right"></div>
                </div>
              </div>
              {paymentInfo.is_stripe == '1' && (
                <div className="payment-body-left-card-wrp">
                <div className="payment-body-left-card">
                  <div className="">
                    <input
                      type="radio"
                      name="payment"
                      id="stripe"
                      className="payment-type"
                      value="stripe"
                    />
                    <label htmlFor="stripe">Stripe</label>
                  </div>
                  <div className="img">
                    <img width="100" src="../../assets/images/credit-card.png" alt="" />
                  </div>
                </div>
              </div>
              )}
              {paymentInfo.is_paypal == '1' && (
                <div className="payment-body-left-card-wrp">
                <div className="payment-body-left-card">
                  <div className="">
                    <input
                      type="radio"
                      name="payment"
                      id="paypal"
                      className="payment-type"
                      value="paypal"
                    />
                    <label htmlFor="paypal">Paypal</label>
                  </div>
                  <div className="img">
                    <img width="100" src="../../assets/images/paypal.png" alt="" />
                  </div>
                </div>
                </div>
              )}
              <button type="submit">Make Payment</button>
            </form>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
