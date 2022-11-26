import "./App.css";
import React, { useState, useEffect } from "react";
import UploadSection from "./component/UploadSection/UploadSection";
function App() {
  const [images, setImages] = useState([1,8,9]);

  useEffect(() => {
    localStorage.setItem("images", JSON.stringify(images));
  }, [images]);
  console.log(images)

  return <UploadSection/>;
}

export default App;
