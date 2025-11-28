import React from "react";
import Barbers from "../components/2-MainPage/Services/Barbers/Barbers";
import { Container } from "@mui/material";
import { useLocation } from "react-router-dom";
import { haircutArray } from "../components/2-MainPage/Services/ServicePage/Haircut"; // عدّل المسار
import "./route.css";
import { useNavigate } from "react-router-dom";

export default function BarbersRoute() {
  const location = useLocation();
  const haircutName = location.state?.name; // جاي من صفحة سابقة مثلاً
  const haircut = haircutArray.find((h) => h.name === haircutName);
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg">
      <div className="barber-page-card">
        <div className="left-barber-card">
          <Barbers
            onClick={() =>
              navigate("/bookRoute", {
                state: {
                  name: haircut.name,
                  price: haircut.price,
                  time: haircut.time,
                },
              })
            }
          />
        </div>
        <div className="right-barber-card">
          <div className="title">
            <h3>O Zone</h3>
          </div>
          <div className="summary">
            <h3>Summary</h3>
            <div className="">
              <div className="haircut-name-barberPage">{haircut?.name}</div>
              <div className="haircut-price-barberPage">{haircut?.price}$</div>
              <div className="haircut-time-barberPage">
                {haircut?.time} mins
              </div>
              <hr />
              <div className="haircut-total-barberPage">
                <h3>Total Price</h3>
                <div className="total-price">{haircut?.price}$</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
