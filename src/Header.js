import globe from "./images/globe.svg"

export default function Header() {
  return (
    <header className="header">
      <img src={globe} alt="Globe"/>
      <h2>my travel journal.</h2>
    </header>
  )
}