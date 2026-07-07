import React, { useState } from "react";

export default function VRPlayer() {
  const [code, setCode] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState("");

  // Demo Access Code
  const ACCESS_CODE = "123456";

  // Google Drive Preview URL
  const videoUrl =
    "https://drive.google.com/file/d/14QqOXCl1E0UzUMc71snqsCpEfQM3sKq0/preview";

  const verifyCode = () => {
    if (code.trim() === ACCESS_CODE) {
      setVerified(true);
      setError("");
    } else {
      setError("Invalid Access Code");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0f172a 0%, #111827 50%, #000000 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {!verified ? (
        <div
          style={{
            width: "100%",
            maxWidth: "420px",
            background: "#1f2937",
            borderRadius: "20px",
            padding: "35px",
            color: "#fff",
            textAlign: "center",
            boxShadow: "0 15px 40px rgba(0,0,0,0.5)",
          }}
        >
          <h1 style={{ marginBottom: "10px" }}>🥽 VR Video Player</h1>

          <p style={{ color: "#9ca3af", marginBottom: "30px" }}>
            Enter your access code to watch the VR experience.
          </p>

          <input
            type="password"
            placeholder="Enter Access Code"
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
              setError("");
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") verifyCode();
            }}
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "10px",
              border: "1px solid #374151",
              outline: "none",
              background: "#111827",
              color: "#fff",
              fontSize: "16px",
              boxSizing: "border-box",
            }}
          />

          {error && (
            <p
              style={{
                color: "#ef4444",
                marginTop: "12px",
                marginBottom: "0px",
              }}
            >
              {error}
            </p>
          )}

          <button
            onClick={verifyCode}
            style={{
              width: "100%",
              marginTop: "25px",
              padding: "14px",
              background: "#2563eb",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "17px",
              fontWeight: "bold",
            }}
          >
            Unlock Video
          </button>
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            maxWidth: "1200px",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              color: "#fff",
              marginBottom: "20px",
            }}
          >
            🥽 360° VR Demo
          </h1>

          <div
            style={{
              borderRadius: "15px",
              overflow: "hidden",
              boxShadow: "0 10px 35px rgba(0,0,0,0.5)",
            }}
          >
            <iframe
              src={videoUrl}
              width="100%"
              height="700"
              allow="autoplay; fullscreen"
              allowFullScreen
              style={{
                border: "none",
              }}
              title="VR Video"
            />
          </div>
        </div>
      )}
    </div>
  );
}