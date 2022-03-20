import { BsFillCalendarFill } from "react-icons/bs";
import { FaBox, FaRegCreditCard, FaUserAlt } from "react-icons/fa";
import img1 from "../../assets/images/form/img2.png";
import img2 from "../../assets/images/form/img3.jpg";
import img3 from "../../assets/images/form/img4.png";
import img4 from "../../assets/images/form/img5.png";
import img5 from "../../assets/images/form/img6.jpg";

export default function PaymentForm() {
  const Form = () => {
    return (
      <form action="">
        <div className="payment-body-laft-card-wrp">
          <div className="payment-body-left-card">
            <div className="">
              <input type="radio" name="payment" id="credit" />
              <label htmlFor="credit">Credit / Debit Card</label>
            </div>
            <div className="img">
              <img src={img2} alt="" />
            </div>
          </div>
          <div className="payment-body-left-card-body">
            <div className="left">
              <div className="input-group">
                <input type="text" placeholder="Enter Card Number" />
                <span>
                  <FaRegCreditCard />
                </span>
              </div>
              <div className="input-group">
                <input type="text" placeholder="Card Holder" />
                <span>
                  <FaUserAlt />
                </span>
              </div>
              <div className="input-group-wrp">
                <div className="input-group">
                  <input type="text" placeholder="MM / YY" />
                  <span>
                    <BsFillCalendarFill />
                  </span>
                </div>
                <div className="input-group">
                  <input type="text" placeholder="Enter Card Number" />
                  <span>
                    <FaBox />
                  </span>
                </div>
              </div>
            </div>
            <div className="right">
              <img src={img3} alt="" />
            </div>
          </div>
        </div>

        <div className="payment-body-laft-card-wrp">
          <div className="payment-body-left-card">
            <div className="">
              <input type="radio" name="payment" id="credit" />
              <label htmlFor="credit">Bank Transfer</label>
            </div>
            <div className="img"></div>
          </div>
          <div className="payment-body-left-card-body">
            <div className="left">
              <p>Bank Name: CHASE BANK</p>
              <p>Acount Number: 87475987423</p>
              <p>Routing Number: 347892383497</p>
            </div>
            <div className="right">
              <img src={img4} alt="" />
            </div>
          </div>
        </div>

        <div className="payment-body-laft-card-wrp">
          <div className="payment-body-left-card">
            <div className="">
              <input type="radio" name="payment" id="credit" />
              <label htmlFor="credit">Check Payment</label>
            </div>
            <div className="img"></div>
          </div>
          <div className="payment-body-left-card-body">
            <div className="left">
              <p>
                <strong>Please Pay to:</strong> manden islamic Center
              </p>
              <div className="input-group">
                <input type="text" placeholder="Enter check Number" />
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
              <input type="radio" name="payment" id="credit" />
              <label htmlFor="credit">Zelle Payment</label>
            </div>
            <div className="img"></div>
          </div>
          <div className="payment-body-left-card-body">
            <div className="left">
              <p>
                <strong>Email:</strong> pay@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> 7287439873
              </p>
            </div>
            <div className="right"></div>
          </div>
        </div>

        <div className="payment-body-left-card-wrp">
          <div className="payment-body-left-card">
            <div className="">
              <input type="radio" name="payment" id="credit" />
              <label htmlFor="credit">Cash Payment</label>
            </div>
            <div className="img"></div>
          </div>
          <div className="payment-body-left-card-body">
            <div className="left">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Enter Full Name of the Reciver"
                />
                <span>
                  <FaUserAlt />
                </span>
              </div>
              <div className="input-group">
                <input type="text" placeholder="Ender Reciver Phone Number" />
                <span>
                  <FaRegCreditCard />
                </span>
              </div>
            </div>
            <div className="right"></div>
          </div>
        </div>
      </form>
    );
  };

  return (
    <div className="payment">
      <div className="payment-header">
        <div className="container">
          <div className="payment-header-card">
            <div className="payment-header-card-left">
              <p>Total Dye Amount</p>
              <h2>$1000.00</h2>
            </div>
            <ul className="payment-header-card-right">
              <li>
                <p>Paid</p>
                <span>$250.00</span>
              </li>
              <li>
                <p>Balenc</p>
                <span>$750.00</span>
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
            <Form />
          </div>
          <div className="payment-body-right">
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
          </div>
        </div>
      </div>
    </div>
  );
}
