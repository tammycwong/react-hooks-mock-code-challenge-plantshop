import React, { useState, useEffect } from "react";
import PlantCard from "./PlantCard";

function PlantList() {
  const [plants, setPlants] = useState([]);
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((data) => {
        setPlants(data);
        // setPlants assigns the data to plants
      });
  }, []);

  return (
    <ul className="cards">
      {" "}
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          image={plant.image}
          price={plant.price}
          name={plant.name}
        />
      ))}
    </ul>
  );
}
export default PlantList;
