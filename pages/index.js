import Head from 'next/head'

export default function Home() {
  return (
    <div className={"container"}>
      <section className={"gridItem1"}>
        <div>
          <img src={"/icon-sedans.svg"}/>
          <h1>SEDANS</h1>
          <p>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</p>
          <button>Learn More</button>
        </div>
      </section>
      <section className={"gridItem2"}>
        <div>
          <img src={"/icon-suvs.svg"}/>
          <h1>SUVS</h1>
          <p>Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.</p>
          <button>Learn More</button>
        </div>
      </section>
      <section className={"gridItem3"}>
        <div>
          <img src={"/icon-luxury.svg"}/>
          <h1>LUXURY</h1>
          <p>Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.</p>
          <button>Learn More</button>
        </div>
      </section>
    </div>   
  )
}
