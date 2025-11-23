import Reviews from "./Reviews/Reviews";
import Barbers from "../Barbers/Barbers";
import "./servicepage.css";
import { useState } from "react";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

import { useNavigate } from "react-router-dom";

// Haircut Array
import { haircutArray } from "./Haircut";
export default function ServicePage() {
  const [openReview, setOpenReview] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="main-service-page" id="services">
      <h2 className="title-service-page">Services</h2>

      <div className="content-service-page">
        {haircutArray.map((box, index) => {
          return (
            <div
              key={index}
              className="haircut"
              onClick={() => {
                navigate("/barbers", { state: box });
              }}
            >
              <div className="img-des">
                <div className="img">
                  <img className="" src={box.img} />
                </div>

                <div className="des-haircut">
                  <p>{box.name}</p>

                  <div className="time-price">
                    <p>{box.time} mins</p>
                    <span className="small-circle"></span>
                    <p>${box.price}</p>
                  </div>
                </div>
              </div>
              <ChevronRightIcon className="chevron-right-icon" />
            </div>
          );
        })}
      </div>
      <Barbers
        onClick={() => {
          navigate("/servicesRoute");
        }}
      />
      {/* Contact US */}
      <div className="contact-us-section">
        <h2 className="contact-us-title">Contact us</h2>
        <div className="contact-number information">
          <CallOutlinedIcon />
          <p className="number">+1 246 262-0000</p>
        </div>
        <div className="contact-email information">
          <EmailOutlinedIcon />
          <p className="email">thelionsdenbb@gmail.com</p>
        </div>
      </div>
      {/* Reviews */}
      <div className="reviews-section" id="reviews">
        <h2 className="reviews-title">Reviews</h2>
        <div className="reviews-content">
          <p className="reviews-p">
            Be the first to review us and share insights about your experience.
          </p>
          <button className="review-us-btn" onClick={() => setOpenReview(true)}>
            Write a review
          </button>
        </div>
      </div>

      <Reviews open={openReview} onClose={() => setOpenReview(false)} />
    </div>
  );
}
