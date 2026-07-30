import { useCallback, useMemo } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine } from '@tsparticles/engine';
import { Box } from '@mui/material';

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: false,
      particles: {
        number: { value: 60, density: { enable: true } },
        color: { value: ['#00E5FF', '#8B5CF6', '#FFD700'] },
        shape: { type: 'circle' },
        opacity: { value: { min: 0.1, max: 0.4 }, animation: { enable: true, speed: 1 } },
        size: { value: { min: 1, max: 3 } },
        move: { enable: true, speed: 0.8, direction: 'none' as const, random: true },
        links: { enable: true, distance: 150, color: '#00E5FF', opacity: 0.08, width: 1 },
      },
      interactivity: {
        events: { onHover: { enable: true, mode: 'grab' as const } },
        modes: { grab: { distance: 140, links: { opacity: 0.2 } } },
      },
      detectRetina: true,
    }),
    [],
  );

  return (
    <Box sx={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }}>
      <Particles id="tsparticles" init={particlesInit} options={options} />
    </Box>
  );
}
