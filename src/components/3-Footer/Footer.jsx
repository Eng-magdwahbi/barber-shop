import "./footer.css";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="">
          <h2 className="footer-logo">O Zone</h2>
          <h3 className="footer-title">
            Your trusted barbershop for modern and classic grooming.
          </h3>
          <p className="footer-subtitle">Call us if you have any problem.</p>
        </div>
        <div className="img-footer">
          <img src="/public/images/ozone-logo-removebg-preview.png" alt="" />
        </div>
      </div>
    </footer>
  );
}
