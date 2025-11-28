import "./header.css";
import { useState } from "react";

import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

export default function Header() {
  const [active, setActive] = useState(0);
  const links = ["Services", "Barber", "Reviews"];
  const linksGo = ["services", "barber", "reviews"];

  return (
    <header>
      <div className="content">
        <div className="left-side">
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={`#${linksGo[index]}`}
                  onClick={() => setActive(index)}
                  className={active === index ? "active" : ""}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="right-side">
          <CallOutlinedIcon />
          <p>Call us</p>
          <p>+1 246 262-0000</p>
          {/* <div className="tooltip">
            <button className="btn">
              <FileUploadOutlinedIcon />
            </button>
            <span className="tooltip-text">Share This Page</span>
          </div> */}

          {/* <div className="tooltip">
            <button className="btn">
              <AccountCircleOutlinedIcon />
            </button>
            <span className="tooltip-text">Login</span>
          </div> */}
        </div>
      </div>
    </header>
  );
}
