import React, { useEffect, useRef, useState } from "react";

export default function VRPlayer() {
  const [code, setCode] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState("");
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoError, setVideoError] = useState("");
  const videoRef = useRef(null);

  const ACCESS_CODE = "123456";
  const videoUrl =
    // "https://huggingface.co/buckets/Sudhanshu2207/3dvideo/resolve/main/03.mp4";
    "https://huggingface.co/buckets/Sudhanshu2207/3dvideo/resolve/03.mp4";

  useEffect(() => {
    if (document.querySelector("script[data-aframe]")) return;

    const script = document.createElement("script");
    script.src = "https://aframe.io/releases/1.6.0/aframe.min.js";
    script.async = true;
    script.dataset.aframe = "true";
    document.head.appendChild(script);
  }, []);

  const verifyCode = () => {
    if (code.trim() !== ACCESS_CODE) {
      setError("Invalid Access Code");
      return;
    }

    setVerified(true);
    setError("");
  };

  const startVideo = async () => {
    try {
      setVideoError("");
      videoRef.current.load();
      await videoRef.current?.play?.();
      setIsPlaying(true);
      setIsVideoReady(true);
    } catch (err) {
      setVideoError(
        "MP4 link works, but embedded VR playback is blocked. The video host may be failing CORS/WebGL texture loading."
      );
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
          <h1 style={{ marginBottom: "10px" }}>VR Video Player</h1>

          <p style={{ color: "#9ca3af", marginBottom: "30px" }}>
            Enter your access code to watch the VR experience on Meta Quest.
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
        <div style={{ width: "100%", maxWidth: "1280px" }}>
          <h1
            style={{
              textAlign: "center",
              color: "#fff",
              marginBottom: "8px",
            }}
          >
            360 VR Demo
          </h1>

          <p
            style={{
              textAlign: "center",
              color: "#9ca3af",
              marginBottom: "20px",
            }}
          >
            Open this page in Meta Quest Browser and tap the VR headset button.
          </p>

          <div
            style={{
              height: "min(72vh, 720px)",
              minHeight: "420px",
              borderRadius: "14px",
              overflow: "hidden",
              boxShadow: "0 10px 35px rgba(0,0,0,0.5)",
              background: "#000",
            }}
          >
            <a-scene
              embedded
              vr-mode-ui="enabled: true"
              renderer="antialias: true; colorManagement: true"
              style={{ width: "100%", height: "100%" }}
            >
              <a-assets>
                <video
                  id="vr-video"
                  ref={videoRef}
                  src={videoUrl}
                  preload="auto"
                  loop
                  playsInline
                  crossOrigin="anonymous"
                  onCanPlay={() => {
                    setIsVideoReady(true);
                    setVideoError("");
                  }}
                  onLoadedData={() => {
                    setIsVideoReady(true);
                    setVideoError("");
                  }}
                  onPlaying={() => {
                    setIsPlaying(true);
                    setIsVideoReady(true);
                    setVideoError("");
                  }}
                  onError={() =>
                    setVideoError(
                      "Video could not load inside the VR player. The host must allow CORS for WebGL video textures."
                    )
                  }
                />
              </a-assets>

              <a-videosphere src="#vr-video" rotation="0 -90 0" />
              <a-camera
                wasd-controls-enabled="false"
                look-controls="pointerLockEnabled: false"
              />

              {!isVideoReady && (
                <a-text
                  value="Tap Start VR Video below"
                  position="0 1.6 -3"
                  align="center"
                  color="#ffffff"
                  width="5"
                />
              )}
            </a-scene>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "16px",
            }}
          >
            <button
              onClick={startVideo}
              style={{
                padding: "12px 18px",
                background: isPlaying ? "#16a34a" : "#2563eb",
                color: "#fff",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              {isPlaying ? "Video Started" : "Start VR Video"}
            </button>
          </div>

          {videoError && (
            <p
              style={{
                color: "#f87171",
                marginTop: "14px",
                textAlign: "center",
              }}
            >
              {videoError}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
