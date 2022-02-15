import Card from "./Card.js"
import data from "./data.js"

export default function Main() {
  const dataCards = data.map(item=> {
      return  <Card 
                key={item.id}
                {...item}
              />
  })
  return (
    <main>
      {dataCards}
    </main>
  )
}