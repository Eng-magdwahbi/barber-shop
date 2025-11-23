import "./barbers.css";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
export default function Barbers({ onClick }) {
  const barbers = ["Badeh", "Hussam", "Ahmad"];
  return (
    <div className="barber-card" id="barber">
      <h2 className="title-barbers-page">Barbers</h2>
      {barbers.map((barber, index) => {
        return (
          <div
            className="barber-name-card"
            key={index}
            onClick={() => onClick && onClick(barber)}
            style={{ cursor: "pointer" }} // شكل الكورسر لتحسين التجربة
          >
            <p className="barber-name">{barber}</p>
            <ChevronRightIcon className="chevron-right-icon" />
          </div>
        );
      })}
    </div>
  );
}
