import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { FaRegCreditCard, FaUserAlt } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import img1 from "../../assets/images/form/img2.png";
import img4 from "../../assets/images/form/img5.png";
import img5 from "../../assets/images/form/img6.jpg";
import { ThemeContext } from "../../context/ThemeContext";
import Values from "../../Values";

export default function PaymentForm() {
  const [data, setData] = useState()
  useEffect(() => {
    const getDataURL = `${Values.BASE_URL}profile`;
    const token = localStorage.getItem("loginData");

    axios
      .get(getDataURL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((d) => {
        setData(d.data.response)
       
      })
      .catch((e) => {
        console.log(e.response);
      });
  }, []);


  
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

 

  



  // handler

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


  const [amount, setAmount] = useState("");
  const [reason, setReason] = useState("");
  const [transactionNumBank, setTransactionNumBank] = useState("");
  const [transactionNumZelle, setTransactionNumZelle] = useState("");
  const [checkNum, setCheckNum] = useState("");
  const [reciverName, setReciverName] = useState("");
  const [reciverPhone, setReciverPhone] = useState("");

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

  const amountHandler = (e) => {
    setAmount(e.target.value);
  }

  const reasonHandler = (e) => {
    setReason(e.target.value)
  }

  // submit handler

  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
     
      amount,
      reason,
      method: paymentMethod,


      info: {
        paymentMethod,
        transactionNumBank,
        checkNum,
        transactionNumZelle,
        reciverName,
        reciverPhone,
      },
    };
    const token = localStorage.getItem("loginData");


    // api system
    const POSTURL = `${Values.BASE_URL}make-payment`;
    axios
      .post(POSTURL, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((d) => {
        // tostSuccess(d.data.message);
        tostSuccess("Payment successfully");

        // location.reload();
      })
      .catch((e) => {
        tostError(e.response.data.message);
        console.log(e.response.message)
      });
  };
  

  return (
    <div className="payment">
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
      <div className="payment-header">
        <div className="container">
          <div className="payment-header-card">
            <div className="payment-header-card-left">
              <p>Total Dye Amount</p>
              <h2>${data && data.finance.due}</h2>
            </div>
            <ul className="payment-header-card-right">
              <li>
                <p>Paid</p>
                <span>${data && data.finance.paid.due.completed}</span>
              </li> 
              <li>
                <p>Pending</p>
                <span>${data && data.finance.paid.due.pending}</span>
              </li>
            </ul>
          </div>
          <div className="payment-header-img">
            <img src={img1} alt="" />
          </div>
        </div>
      </div>

      <div className="payment-body">
        <div className="container">
          <h2>How Would you like to pay?</h2>
        </div>
        <div className="container">
          <div className="payment-body-left">
          <form onSubmit={(e) => submitHandler(e)} action="" className="form">
             

              {/* payment information */}
              <div className="check-group">
               
              <div className="input-group">
                  <input
                    type="radio"
                    name="time"
                    value="0"
                    id="ontime"
                    onChange={e=> reasonHandler(e)}
                   
                  />
                  <label htmlFor="ontime">Pay due</label>
                </div>{" "}
               
                <div className="input-group">
                  <input
                    type="radio"
                    name="time"
                    id="monthly"
                    value="1"
                    onChange={e=> reasonHandler(e)}
                    
                  />
                  <label htmlFor="monthly">Donation</label>
                </div>
              </div>

              <div className="input-group">
                  <label htmlFor="amount">
                  Amount:
                  </label>
                  <input
                    type="text"
                    id="amount"
                    value={amount}
                    onChange={(e) => amountHandler(e)}
                  />
                </div>
            

              <div className="payment-body-laft-card-wrp">
                <div className="payment-body-left-card">
                  <div className="">
                    <input
                      type="radio"
                      name="payment"
                      id="credit"
                      className="payment-type"
                      value="1"
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
                      value="2"
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
                      value="3"
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
                      value="4"
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

              <button type="submit">Make Payment</button>
            </form>
          </div>
          {/* <div className="payment-body-right">
            <div className="payment-body-right-card">
              <div className="payment-body-right-card-header">
                <h3>Ibrahim Sylla</h3>
                <p>472 Business Street, Queens, NY 11236 </p>
                <p>Tel: 347 896-9632</p>
              </div>
              <div className="payment-body-right-card-body">
                <div className="table">
                  <div className="table-header">
                    <p>Descripgion</p>
                    <p>Qty</p>
                    <p>Amount</p>
                  </div>
                  <div className="table-body">
                    <p>One time Payment</p>
                    <p>1</p>
                    <p>$350</p>
                  </div>
                  <div className="table-footer">
                    <p>TOTAL</p>
                    <p></p>
                    <p>$350</p>
                  </div>
                </div>

                <button>Complete</button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
