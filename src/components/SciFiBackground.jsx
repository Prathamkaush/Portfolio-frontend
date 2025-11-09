import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function SciFiBackground() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "#020617", // dark sci-fi blue
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: { repulse: { distance: 100, duration: 0.4 } },
        },
        particles: {
          color: { value: "#00ffff" }, // neon cyan
          links: {
            color: "#00ffff",
            distance: 120,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          move: { enable: true, speed: 1.5, outModes: "bounce" },
          number: { density: { enable: true, area: 900 }, value: 60 },
          opacity: { value: 0.4 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
}
