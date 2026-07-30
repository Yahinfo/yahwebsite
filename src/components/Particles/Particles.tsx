import { useMemo } from "react";
import Particles from "@tsparticles/react";
import { Box } from "@mui/material";

export default function ParticlesBackground() {
  const options = useMemo(
    () => ({
      fullScreen: false,
      particles: {
        number: {
          value: 60,
          density: { enable: true },
        },
        color: {
          value: ["#00E5FF", "#8B5CF6", "#FFD700"],
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: { min: 0.1, max: 0.4 },
        },
        size: {
          value: { min: 1, max: 3 },
        },
        move: {
          enable: true,
          speed: 0.8,
        },
        links: {
          enable: true,
          distance: 150,
          color: "#00E5FF",
          opacity: 0.08,
          width: 1,
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  return (
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        zIndex: 1,
        pointerEvents: "none",
      }}
    >
      <Particles id="tsparticles" options={options} />
    </Box>
  );
}
