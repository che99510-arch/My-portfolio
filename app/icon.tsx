import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
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
            height: 16,
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 100%)",
            borderRadius: "8px 8px 0 0",
          }}
        />
        {/* M letter */}
        <span
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: 900,
            fontFamily: "Arial, sans-serif",
            letterSpacing: "-1px",
            lineHeight: 1,
            marginTop: 2,
          }}
        >
          M
        </span>
        {/* Blue dot accent */}
        <div
          style={{
            position: "absolute",
            top: 5,
            right: 5,
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: "#93c5fd",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
