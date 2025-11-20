import "./services.css";
import Book from "../Book/Book";
import ServicePage from "./ServicePage/ServicePage";

export default function Services() {
  return (
    <div className="services-container">
      <ServicePage />

      <Book />
    </div>
  );
}
