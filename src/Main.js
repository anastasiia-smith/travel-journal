import pin from "./images/pin.svg"

export default function Main() {
  return (
    <main>
      <div className="card">
        <div className="card__image">
          <img />
        </div>
        <div className="card__content">
          <div className="card__content-location">
            <img src={pin} alt="Map pin" />
            <span>LOCATION</span>
            <a href="#">View on Google Maps</a>
          </div>
          <h3 className="card__content-header">NAME</h3>
          <div className="card__content-date">FROM - TO</div>
          <p className="card__content-descripion">
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
          </p>
        </div>
      </div>
    </main>
  )
}