import "./App.css";
import React, { useState, useEffect } from "react";
function App() {
  const [images, setImages] = useState([1,8,9]);

  useEffect(() => {
    localStorage.setItem("images", JSON.stringify(images));
  }, [images]);
  console.log(images)

  return <div className="App"></div>;
}

export default App;
