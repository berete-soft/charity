import img1 from "../../assets/images/form/img-1.png";
import sliderImg from "../../assets/images/form/slider-img.png";

export default function DonationForm() {
  const Form = () => {
    return (
      <form action="" className="form">
        <p>
          <span>*</span> indicates requered field
        </p>

        <div className="check-group">
          <strong>Yes, I want to make a Donation for:</strong>
          <div className="input-group">
            <input type="checkbox" name="time" id="ontime" />
            <label htmlFor="ontime">One time</label>
          </div>{" "}
          <strong>OR</strong>
          <div className="input-group">
            <input type="checkbox" name="time" id="monthly" />
            <label htmlFor="monthly">Monthly</label>
          </div>
        </div>
        <div className="group">
          <div className="input-group">
            <input type="radio" name="quentity" id="$10" />
            <label htmlFor="$10">$10</label>
          </div>
          <div className="input-group">
            <input type="radio" name="quentity" id="$15" />
            <label htmlFor="$15">$15</label>
          </div>
          <div className="input-group">
            <input type="radio" name="quentity" id="$20" />
            <label htmlFor="$20">$20</label>
          </div>
          <div className="input-group">
            <input type="radio" name="quentity" id="$30" />
            <label htmlFor="$30">$30</label>
          </div>
          <div className="input-group">
            <input type="radio" name="quentity" id="$50" />
            <label htmlFor="$50">$50</label>
          </div>
          <div className="input-group">
            <input type="radio" name="quentity" id="$100" />
            <label htmlFor="$100">$100</label>
          </div>
          <div className="input-group">
            <input type="radio" name="quentity" id="other" />
            <label htmlFor="other">other</label>
            <input type="text" />
          </div>
          <p>
            Monthly giving is a great way to help those in need of decent homes.
            You make a big impact over time through small gifts, and Habitat has
            dependable funding while saving time and resources on future
            renewals and appeals.
          </p>
        </div>
        <strong>Add Address Information</strong>
        <div className="group-1">
          <div className="input-group">
            <label htmlFor="firstName">
              <span>*</span>First Name:
            </label>
            <input type="text" id="firstName" />
          </div>
          <div className="input-group">
            <label htmlFor="lastName">
              <span>*</span>last Name:
            </label>
            <input type="text" id="lastName" />
          </div>
          <div className="checkbox">
            <span>Check if making a corporate contribution/donation.</span>
            <input type="checkbox" name="condition" id="yes" />
            <label htmlFor="yes">Yes</label>
          </div>

          <div className="input-group">
            <label htmlFor="address1">
              <span>*</span>address 1:
            </label>
            <input type="text" id="address1" />
          </div>

          <div className="input-group">
            <label htmlFor="address2">address 2:</label>
            <input type="text" id="address2" />
          </div>

          <div className="input-group">
            <label htmlFor="city">
              <span>*</span>city:
            </label>
            <input type="text" id="city" />
          </div>

          <div className="input-group">
            <label htmlFor="state">
              <span>*</span>state:
            </label>
            <input type="text" id="state" />
          </div>

          <div className="input-group">
            <label htmlFor="zip">
              <span>*</span>Zip Code:
            </label>
            <input type="text" id="zip" />
          </div>

          <div className="input-group">
            <label htmlFor="Country">
              <span>*</span>Country:
            </label>
            <input type="text" id="Country" />
          </div>

          <div className="input-group">
            <label htmlFor="phone">
              <span>*</span>Phone Number:
            </label>
            <input type="text" id="phone" />
          </div>

          <div className="input-group">
            <label htmlFor="email">
              <span>*</span>Email Address:
            </label>
            <input type="text" id="email" />
          </div>
        </div>

        <button type="submit">Make Payment</button>
      </form>
    );
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
            <Form />
          </div>
        </div>
      </div>
    </main>
  );
}
