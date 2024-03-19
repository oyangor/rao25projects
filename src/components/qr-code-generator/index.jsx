import QRCode from "react-qr-code";
import "./styles-qr.css";
import { useState } from "react";

export default function QrCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQrCode() {
    setQrCode(input);
    setInput("");
  }

  return (
    <div className="container-qr">
      <h1>QR code generator</h1>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          placeholder="Enter your value here"
          value={input}
        />
        <button
          onClick={handleGenerateQrCode}
          disabled={input && input.trim() !== "" ? false : true}
        >
          Generate
        </button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={300} bgColor="white" />
      </div>
    </div>
  );
}
