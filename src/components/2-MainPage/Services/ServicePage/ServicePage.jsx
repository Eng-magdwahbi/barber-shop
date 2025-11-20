import Barbers from "../Barbers/Barbers";
import "./servicepage.css";

// Haircut Array
const haircutArray = [
  { name: "Haircut", time: "30", price: "40", img: "/images/15.png" },
  {
    name: "Haircut and Bread (Basic)",
    time: "30",
    price: "45",
    img: "/images/30.png",
  },
  {
    name: "Haircut and Bread (Premium)",
    time: "30",
    price: "50",
    img: "/images/60.png",
  },
  {
    name: "Wet Scissor Cut. (No Machine, Scissor Only)",
    time: "30",
    price: "55",
    img: "",
  },
  { name: "Traditional Wet Shave", time: "20", price: "55", img: "" },
  {
    name: "Haircut and bread (Premium) + Bread Colour",
    time: "45",
    price: "60",
    img: "",
  },
  { name: "Haircut and Wet Shave", time: "40", price: "85", img: "" },
  { name: "Bread Only (Basic)", time: "15", price: "25", img: "" },
  { name: "Bread Only (Premium)", time: "15", price: "30", img: "" },
  { name: "Child Haircut (Under 16)", time: "25", price: "30", img: "" },
  {
    name: "Wet Scissor Cut Child (No Machine, Scissor Only)",
    time: "30",
    price: "40",
    img: "",
  },
  { name: "Hair-line Only", time: "10", price: "20", img: "" },
  { name: "Hair-line and Bread (Basic)", time: "20", price: "30", img: "" },
  { name: "Hair-line and Bread (Premium)", time: "20", price: "35", img: "" },
];

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
export default function ServicePage() {
  return (
    <div className="main-service-page">
      <h2 className="title-service-page">Services</h2>

      <div className="content-service-page">
        {haircutArray.map((box) => {
          return (
            <div className="haircut">
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
