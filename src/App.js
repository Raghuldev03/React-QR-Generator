import React, { useState } from "react";
import QRCode from "qrcode.react";
import Header from "./component/Header";
import "./App.css";

function App() {
  const [url, setUrl] = useState("");

  const handleChange = (event) => {
    setUrl(event.target.value);
  };

  const handleSaveQRCode = () => {
    const canvas = document.querySelector("canvas");
    const image = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    const link = document.createElement("a");
    link.href = image;
    link.download = "qrcode.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="App">
      <Header />
      <h1>QR Code Generator</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter URL"
          className="input-field"
          value={url}
          onChange={handleChange}
        />
        <button className="generate-button" onClick={handleSaveQRCode}>
          Save QR Code
        </button>
      </div>
      <div className="qr-code-container">
        {url && <QRCode value={url} size={200} />}
      </div>
      <div className="footer">
        <p>© 2024 by Raghul Balasubramani. All rights reserved.</p>
      </div>
    </div>
  );
}

export default App;
