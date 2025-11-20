import "./barbers.css";
export default function Barbers() {
  return (
    <div className="barber-card">
      <div className="header-barber">
        <h1 className="title-barber">Barber</h1>
      </div>

      <div className="main-content">
        <div className="name-card">
          <h2 className="name">Brandon Gill</h2>
        </div>

        <div className="name-card">
          <h2 className="name">Carter</h2>
        </div>

        <div className="name-card">
          <h2 className="name">Caleb Foster</h2>
        </div>
      </div>
    </div>
  );
}
