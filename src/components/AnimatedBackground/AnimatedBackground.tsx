import { Box } from '@mui/material';

interface AnimatedBackgroundProps {
  variant?: 'aurora' | 'mesh';
}

export default function AnimatedBackground({ variant = 'aurora' }: AnimatedBackgroundProps) {
  return (
    <Box
      className={variant === 'aurora' ? 'aurora-bg' : 'mesh-bg'}
      sx={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}
    >
      {variant === 'aurora' && (
        <>
          <Box
            sx={{
              position: 'absolute',
              width: 600,
              height: 600,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0,229,255,0.08) 0%, transparent 70%)',
              top: '-10%',
              right: '-5%',
              animation: 'float 8s ease-in-out infinite',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              width: 500,
              height: 500,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)',
              bottom: '-10%',
              left: '-5%',
              animation: 'float 10s ease-in-out infinite reverse',
            }}
          />
          <Box
            className="animate-blob"
            sx={{
              position: 'absolute',
              width: 400,
              height: 400,
              background: 'linear-gradient(135deg, rgba(255,215,0,0.05), rgba(0,255,153,0.05))',
              top: '40%',
              left: '30%',
              filter: 'blur(60px)',
            }}
          />
        </>
      )}
    </Box>
  );
}
