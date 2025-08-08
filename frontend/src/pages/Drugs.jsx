import React, { useEffect, useState } from "react";
import api from "../api/axios";

export default function Drugs() {
  const [drugs, setDrugs] = useState([]);

  useEffect(() => {
    api.get("/drugs").then((res) => setDrugs(res.data));
  }, []);

  return (
    <div>
      <h2>Available Drugs</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {drugs.map((drug) => (
          <div
            key={drug.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              width: "200px",
            }}
          >
            <h3>{drug.name}</h3>
            <p>{drug.description}</p>
            <p>Price: ₹{drug.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
