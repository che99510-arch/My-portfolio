import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          borderRadius: 40,
          background: "linear-gradient(135deg, #2563EB 0%, #1d4ed8 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Shine */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 90,
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 100%)",
            borderRadius: "40px 40px 0 0",
          }}
        />
        {/* M letter */}
        <span
          style={{
            color: "white",
            fontSize: 110,
            fontWeight: 900,
            fontFamily: "Arial, sans-serif",
            letterSpacing: "-4px",
            lineHeight: 1,
            marginTop: 10,
          }}
        >
          M
        </span>
        {/* Blue dot accent */}
        <div
          style={{
            position: "absolute",
            top: 28,
            right: 28,
            width: 24,
            height: 24,
            borderRadius: "50%",
            background: "#93c5fd",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
