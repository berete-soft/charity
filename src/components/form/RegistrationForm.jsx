import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

export default function RegistrationForm() {
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
          <form action="" className="registration">
            <div className="registration-header">
              <input type="text" placeholder="Date" className="date" />
              <div className="radio-wrp">
                <span>Membership Type</span>
                <div className="radio-group">
                  <input type="radio" name="memprbership" id="regular" />
                  <label htmlFor="regular">Regular</label>
                </div>
                <div className="radio-group">
                  <input type="radio" name="memprbership" id="premium" />
                  <label htmlFor="premium">Premium</label>
                </div>
                <div className="radio-group">
                  <input type="radio" name="memprbership" id="vip" />
                  <label htmlFor="vip">Vip</label>
                </div>
              </div>
            </div>
            <div className="registration-personal">
              <div className="group-title">
                <h2>PERSONAL INFORMATION</h2>
              </div>
              <div className="input-grid">
                <input type="text" name="name" placeholder="Name" />
                <input type="text" name="lastName" placeholder="Last Name" />
              </div>
              <div className="radio-wrp">
                <span>Gender</span>
                <div className="radio-group">
                  <input type="radio" name="gender" id="male" />
                  <label htmlFor="male">Male</label>
                </div>
                <div className="radio-group">
                  <input type="radio" name="gender" id="female" />
                  <label htmlFor="female">Female</label>
                </div>
              </div>
              <div className="input-grid">
                <input type="text" name="name" placeholder="Date of Birth" />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Place of Birth"
                />
              </div>
              <div className="input-grid">
                <input type="text" name="name" placeholder="Father’s Name" />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Mother’s Name"
                />
              </div>
              <div className="input-grid">
                <input type="text" name="name" placeholder="Nationality" />
                <input type="text" name="lastName" placeholder="Religion" />
              </div>

              <div className="radio-wrp">
                <span>Resident Status</span>
                <div className="radio-group">
                  <input type="radio" name="Resident-Status" id="Resident" />
                  <label htmlFor="Resident">Resident</label>
                </div>
                <div className="radio-group">
                  <input
                    type="radio"
                    name="Resident-Status"
                    id="Non-Resident"
                  />
                  <label htmlFor="Non-Resident">Non-Resident</label>
                </div>
              </div>

              <div className="radio-wrp">
                <span>Marital Status</span>
                <div className="radio-group">
                  <input type="radio" name="marrital-status" id="Married" />
                  <label htmlFor="Married">Married</label>
                </div>
                <div className="radio-group">
                  <input type="radio" name="marrital-status" id="Unmarried" />
                  <label htmlFor="Unmarried">Unmarried</label>
                </div>
              </div>

              <div className="input-grid">
                <input type="text" name="name" placeholder="National ID No." />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Driving License No."
                />
              </div>

              <div className="input-grid">
                <input type="text" name="name" placeholder="Tin No." />
                <input type="text" name="lastName" placeholder="Passport No." />
              </div>
            </div>

            <div className="registration-personal">
              <div className="group-title">
                <h2>CONTACT DETAILS</h2>
              </div>
              <div className="input-grid">
                <input type="text" name="name" placeholder="Present Address" />
              </div>

              <div className="input-grid">
                <input type="text" name="name" placeholder="City" />
                <input type="text" name="lastName" placeholder="State" />
              </div>

              <div className="input-grid">
                <input type="text" name="name" placeholder="Postal Code" />
                <input type="text" name="lastName" placeholder="Country" />
              </div>
              <div className="input-grid">
                <input type="text" name="name" placeholder="Phone" />
                <input type="text" name="lastName" placeholder="Email" />
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
