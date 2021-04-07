import Head from 'next/head'
import styles from '../styles/Home.module.scss'

export default function Home() {

  const cars = [
    {
      id: 1,
      image: "/icon-sedans.svg",
      title: "SEDANS",
      description: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
    },
    {
      id: 2,
      image: "/icon-suvs.svg",
      title: "SUVS",
      description: "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
    },
    {
      id: 3,
      image: "/icon-luxury.svg",
      title: "LUXURY",
      description: "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
    },
  ];

  return (
    <div className={styles.container}>
      {cars.map(car => (
        <section className={styles["gridItem" + car.id]} key={car.id}>
          <div>
            <img src={car.image} alt={"Car icon"}/>
            <h1>{car.title}</h1>
            <p>{car.description}</p>
            <button>Learn More</button>
          </div>
        </section>
      ))}
    </div>   
  )
}
