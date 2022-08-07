import { Fragment, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartAction } from "../../Store/cart-slice";
const Checkout = (props) => {
  const dispatch = useDispatch();
  const countryRef = useRef("VietNam");
  const firstnameRef = useRef("");
  const lastnameRef = useRef("");
  const addressRef = useRef("");
  const cityRef = useRef("");
  const countyRef = useRef("");
  const postcodeRef = useRef("");
  const emailRef = useRef("");
  const telphoneRef = useRef("");
  const noteRef = useRef("");
  const paymentmethodRef = useRef("");

  const d_countryRef = useRef("VietNam");
  const d_firstnameRef = useRef("");
  const d_lastnameRef = useRef("");
  const d_addressRef = useRef("");
  const d_cityRef = useRef("");
  const d_countyRef = useRef("");
  const d_postcodeRef = useRef("");
  const d_emailRef = useRef("");
  const d_telphoneRef = useRef("");

  const carts = useSelector((state) => state.carts);
  const [isDifferentAddress, setIsDifferentAddress] = useState(false);
  const onChangeHandler = (event) => {
    setIsDifferentAddress(!isDifferentAddress);
  };
  let classDifferent = !isDifferentAddress
    ? { display: "none" }
    : { display: "block" };
  let info;

  const submitHandler = (event) => {
    event.preventDefault();
    if (!isDifferentAddress) {
      info = {
        country: countryRef.current.value,
        address: addressRef.current.value,
        county: countyRef.current.value,
        city: cityRef.current.value,
        postcode: postcodeRef.current.value,
        firstname: firstnameRef.current.value,
        lastname: lastnameRef.current.value,
        phone_number: telphoneRef.current.value,
        email: emailRef.current.value,
        note: noteRef.current.value,
        paymentmethod: paymentmethodRef.current.value,
        carts: carts,
      };
    } else {
      info = {
        country: d_countryRef.current.value,
        address: d_addressRef.current.value,
        county: d_countyRef.current.value,
        city: d_cityRef.current.value,
        postcode: d_postcodeRef.current.value,
        firstname: d_firstnameRef.current.value,
        lastname: d_lastnameRef.current.value,
        phone_number: d_telphoneRef.current.value,
        email: d_emailRef.current.value,
        note: noteRef.current.value,
        paymentmethod: paymentmethodRef.current.value,
        carts: carts,
      };
    }
    const fetchData = async () => {
      const reponse = await fetch(`/API/Order`, {
        method: "POST",
        headers: {
          "Content-type": "application/json;charset=utf-8",
          method: "POST",
        },
        body: JSON.stringify(info),
      });
      if (reponse.ok) {
        return await reponse.json();
      } else {
        throw new Error("Error");
      }
    };

    fetchData()
      .then((result) => {
        addressRef.current.value = "";
        countyRef.current.value = "";
        cityRef.current.value = "";
        postcodeRef.current.value = "";
        firstnameRef.current.value = "";
        lastnameRef.current.value = "";
        telphoneRef.current.value = "";
        emailRef.current.value = "";
        noteRef.current.value = "";

        d_addressRef.current.value = "";
        d_countyRef.current.value = "";
        d_cityRef.current.value = "";
        d_postcodeRef.current.value = "";
        d_firstnameRef.current.value = "";
        d_lastnameRef.current.value = "";
        d_telphoneRef.current.value = "";
        d_emailRef.current.value = "";
        setIsDifferentAddress(false);
        dispatch(cartAction.replaceCart());
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Fragment>
      <section className="coupon-area pb-30"></section>
      <section className="checkout-area pb-85">
        <div className="container">
          <form action="#">
            <div className="row">
              <div className="col-lg-8">
                <div className="checkbox-form">
                  <h3>Billing Details</h3>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="country-select">
                        <label>
                          Country <span className="required">*</span>
                        </label>
                        <select ref={countryRef}>
                          <option value="saab">VietNam</option>
                          <option value="mercedes">Afghanistan</option>
                          <option value="audi">Ghana</option>
                          <option value="audi2">Albania</option>
                          <option value="audi3">Bahrain</option>
                          <option value="audi4">Colombia</option>
                          <option value="audi5">Dominican Republic</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          First Name <span className="required">*</span>
                        </label>
                        <input type="text" placeholder="" ref={firstnameRef} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          Last Name <span className="required">*</span>
                        </label>
                        <input type="text" placeholder="" ref={lastnameRef} />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="checkout-form-list">
                        <label>
                          Address <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Street address"
                          ref={addressRef}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="checkout-form-list">
                        <label>
                          Town / City <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Town / City"
                          ref={cityRef}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          State / County <span className="required">*</span>
                        </label>
                        <input type="text" placeholder="" ref={countyRef} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          Postcode / Zip <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Postcode / Zip"
                          ref={postcodeRef}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          Email Address <span className="required">*</span>
                        </label>
                        <input type="email" placeholder="" ref={emailRef} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          Phone <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Telphone"
                          ref={telphoneRef}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="different-address">
                    <div className="ship-different-title">
                      <h3>
                        <label>Ship to a different address?</label>
                        <input
                          id="ship-box"
                          type="checkbox"
                          onChange={onChangeHandler}
                        />
                      </h3>
                    </div>
                    <div id="ship-box-info" style={classDifferent}>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="country-select">
                            <label>
                              Country <span className="required">*</span>
                            </label>
                            <select ref={d_countryRef}>
                              <option value="saab">VietNam</option>
                              <option value="mercedes">Afghanistan</option>
                              <option value="audi">Ghana</option>
                              <option value="audi2">Albania</option>
                              <option value="audi3">Bahrain</option>
                              <option value="audi4">Colombia</option>
                              <option value="audi5">Dominican Republic</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="checkout-form-list">
                            <label>
                              First Name <span className="required">*</span>
                            </label>
                            <input
                              type="text"
                              placeholder=""
                              ref={d_firstnameRef}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="checkout-form-list">
                            <label>
                              Last Name <span className="required">*</span>
                            </label>
                            <input
                              type="text"
                              placeholder=""
                              ref={d_lastnameRef}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="checkout-form-list">
                            <label>
                              Address <span className="required">*</span>
                            </label>
                            <input
                              type="text"
                              placeholder="Street address"
                              ref={d_addressRef}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="checkout-form-list">
                            <label>
                              Town / City <span className="required">*</span>
                            </label>
                            <input
                              type="text"
                              placeholder="Town / City"
                              ref={d_cityRef}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="checkout-form-list">
                            <label>
                              State / County <span className="required">*</span>
                            </label>
                            <input
                              type="text"
                              placeholder=""
                              ref={d_countyRef}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="checkout-form-list">
                            <label>
                              Postcode / Zip <span className="required">*</span>
                            </label>
                            <input
                              type="text"
                              placeholder="Postcode / Zip"
                              ref={d_postcodeRef}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="checkout-form-list">
                            <label>
                              Email Address <span className="required">*</span>
                            </label>
                            <input
                              type="email"
                              placeholder=""
                              ref={d_emailRef}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="checkout-form-list">
                            <label>
                              Phone <span className="required">*</span>
                            </label>
                            <input
                              type="text"
                              placeholder="Postcode / Zip"
                              ref={d_telphoneRef}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="order-notes">
                      <div className="checkout-form-list">
                        <label>Order Notes</label>
                        <textarea
                          id="checkout-mess"
                          cols="30"
                          rows="10"
                          placeholder="Notes about your order, e.g. special notes for delivery."
                          ref={noteRef}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="your-order mb-30 ">
                  <h3>Your order</h3>
                  <div className="your-order-table table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th className="product-name">Product</th>
                          <th className="product-total">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {carts.items.map((item) => {
                          return (
                            <tr className="cart_item">
                              <td className="product-name">
                                {item.product.Product.title}
                              </td>
                              <td className="product-total">
                                {new Intl.NumberFormat("vi-VN", {
                                  style: "currency",
                                  currency: "VND",
                                }).format(item.totalPrice)}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                      <tfoot>
                        <tr className="cart-subtotal">
                          <th>Your Order</th>
                          <td>
                            <span className="amount">
                              {new Intl.NumberFormat("vi-VN", {
                                style: "currency",
                                currency: "VND",
                              }).format(carts.totalPrice)}
                            </span>
                          </td>
                        </tr>
                        <tr className="shipping">
                          <th>Shipping</th>
                          <td>
                            <ul>
                              <li>
                                <input type="radio" name="shipping" checked />
                                <label>Free Shipping:</label>
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr className="order-total">
                          <th>Order Total</th>
                          <td>
                            <strong>
                              <span className="amount">
                                {new Intl.NumberFormat("vi-VN", {
                                  style: "currency",
                                  currency: "VND",
                                }).format(carts.totalPrice)}
                              </span>
                            </strong>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  <div className="payment-method">
                    <div className="country-select">
                      <label>
                        Payment Methods <span className="required">*</span>
                      </label>
                      <select ref={paymentmethodRef}>
                        <option value="1">Direct bank transfer</option>
                        <option value="2">Check payments</option>
                        <option value="3">Cash on delivery</option>
                        <option value="4">PayPal</option>
                      </select>
                    </div>
                  </div>
                  <div className="payment-method">
                    <div className="order-button-payment mt-20">
                      <button className="tp-btn-h1" onClick={submitHandler}>
                        Place order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </Fragment>
  );
};
export default Checkout;
