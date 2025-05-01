import React from 'react'

import featuredItems from "../Constant/data";

const Featured = () => {
  return (


    <section className="featured-section">
    <h2>Featured Products</h2>
    <div className="featured-container">
      {featuredItems.map(item => (
        <div className="featured-card-container" key={item.id}>
          <img src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
        </div>
      ))}
    </div>
  </section>
)
}

export default Featured;




