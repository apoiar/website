/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import apoiarLogo from "../../public/assets/APOIAR_sem_fundo.png";

export const runtime = "edge";

export const alt = "APOIAR - Consulting & BPO";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #65a30d 0%, #84cc16 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.1)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-60px",
            left: "-60px",
            width: "220px",
            height: "220px",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.1)",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "40px",
            justifyContent: "center",
          }}
        >
          <img
            src={apoiarLogo.src}
            alt="APOIAR"
            style={{
              width: "420px",
              height: "112px",
              objectFit: "contain",
            }}
          />
        </div>

        <div
          style={{
            color: "white",
            fontSize: "52px",
            fontWeight: 700,
            textAlign: "center",
            lineHeight: 1.2,
            maxWidth: "900px",
            padding: "0 40px",
            display: "flex",
          }}
        >
          Consulting & BPO
        </div>

        <div
          style={{
            color: "rgba(255, 255, 255, 0.85)",
            fontSize: "24px",
            textAlign: "center",
            maxWidth: "700px",
            marginTop: "24px",
            lineHeight: 1.5,
            display: "flex",
          }}
        >
          Business mentorship and operations support
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
