"use client";
import React, { useEffect, useState } from "react";
import CircleDiagram from "./components/circledrawing";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Wire Drawing Process</h1>
      {data ? <CircleDiagram data={data} /> : <p>Loading...</p>}
    </div>
  );
}
