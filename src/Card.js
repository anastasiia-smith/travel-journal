import pin from "./images/pin.svg"

export default function Main(props) {
  return (
    <div className="card">
      <div className="card__image">
        <img src={props.imageUrl} alt={`${props.title}, ${props.location}`}/>
      </div>
      <div className="card__content">
        <div className="card__location">
          <img src={pin} alt="Map pin" />
          <span>{props.location}</span>
          <a href={props.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h3 className="card__header">{props.title}</h3>
        <div className="card__date">{props.startDate} - {props.endDate}</div>
        <p className="card__descripion">{props.description}</p>
      </div>
    </div>
  )
}