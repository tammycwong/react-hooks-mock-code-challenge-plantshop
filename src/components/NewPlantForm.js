import React, { useState } from "react";

function NewPlantForm(onAddPlant) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  function addNewPlant(event) {
    event.preventDefault();
    const data = {
      name: name,
      price: price,
      image: image,
    };
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((r) => r.json())
      .then((data) => addNewPlant(data));
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={addNewPlant}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          onChange={(event) => setImage(event.target.value)}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          onChange={(event) => setPrice(event.target.value)}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
