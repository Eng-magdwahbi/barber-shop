import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";

import { haircutArray } from "../components/2-MainPage/Services/ServicePage/Haircut";
export default function ServicesRoute() {
  const navigate = useNavigate();
  return (
    <div className="main-service-page route-main-service-page" id="services">
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
    </div>
  );
}
