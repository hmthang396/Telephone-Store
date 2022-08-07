import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const GetSortOrder = (key) => {
  return function (a, b) {
    if (new Date(a.createdAt).getTime() > new Date(b.createdAt).getTime()) {
      return -1;
    } else if (
      new Date(a.createdAt).getTime() < new Date(b.createdAt).getTime()
    ) {
      return 1;
    }
    return 0;
  };
};
const Des_Review = (props) => {
  const fullnameRef = useRef(null);
  const emailRef = useRef(null);
  const reviewRef = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const fetchData = async (data) => {
    const reponse = await fetch(`/API/Feedback`, {
      method: "POST",
      headers: {
        "Content-type": "application/json;charset=utf-8",
        method: "POST",
      },
      body: JSON.stringify({
        fullname: data.fullname,
        email: data.email,
        feedback: data.review,
        productId: props.product.Product.id,
      }),
    });
    if (reponse.ok) {
      return await reponse.json();
    } else {
      throw new Error("Error");
    }
  };
  const sendReview = (event) => {
    event.preventDefault();
    setIsSending(true);
    fetchData({
      fullname: fullnameRef.current.value,
      email: emailRef.current.value,
      review: reviewRef.current.value,
    })
      .then((result) => {
        //console.log(result);
        props.product.Feedback = [
          ...props.product.Feedback,
          {
            fullname: fullnameRef.current.value,
            email: emailRef.current.value,
            feedback: reviewRef.current.value,
            createdAt: new Date(),
          },
        ];
        setIsSending(false);
      })
      .catch((error) => {
        setIsSending(false);
      });
  };
  const listComment = props.product.Feedback.sort(GetSortOrder()).map(
    (feedback) => {
      //console.log(feedback);
      return (
        <div className="review-details-des">
          <div className="author-image mr-15">
            <Link to="#">
              <img src="assets/img/author/author-sm-1.jpeg" alt="" />
            </Link>
          </div>
          <div className="review-details-content">
            <div className="name-date mb-30">
              <h6>
                {" "}
                {feedback.fullname} –{" "}
                <span>
                  {" "}
                  {new Date(feedback.createdAt).toLocaleDateString("vi-VN")}
                </span>
              </h6>
            </div>
            <p>{feedback.feedback}</p>
          </div>
        </div>
      );
    }
  );
  const formReview = isSending ? (
    <div>Data is sending...</div>
  ) : (
    <div className="row">
      <div className="col-xl-12">
        <div className="product__details-comment ">
          <div className="comment-title mb-20">
            <h3>Add a review</h3>
            <p>
              Your email address will not be published. Required fields are
              marked *
            </p>
          </div>
          <div className="comment-input-box">
            <form>
              <div className="row">
                <div className="col-xxl-6 col-xl-6">
                  <div className="comment-input">
                    <input
                      type="text"
                      placeholder="Your Name"
                      ref={fullnameRef}
                      required
                    />
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6">
                  <div className="comment-input">
                    <input
                      type="email"
                      placeholder="Your Email"
                      ref={emailRef}
                      required
                    />
                  </div>
                </div>
                <div className="col-xxl-12">
                  <textarea
                    placeholder="Your review"
                    className="comment-input comment-textarea"
                    ref={reviewRef}
                    required
                  ></textarea>
                </div>
                <div className="col-xxl-12">
                  <div className="comment-submit mb-20">
                    <button className="cart-btn" onClick={sendReview}>
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div className="product__details-review">
      {formReview}
      <div className="row">
        <div className="col-xl-12">
          <div className="review-des-infod">
            <h6>{props.product.Feedback.length} review</h6>
            {listComment}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Des_Review;
