import { createTheme, alpha } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    accent: Palette['primary'];
    blue: Palette['primary'];
  }
  interface PaletteOptions {
    accent?: PaletteOptions['primary'];
    blue?: PaletteOptions['primary'];
  }
}

export const colors = {
  bg: '#050505',
  paper: '#111111',
  primary: '#00E5FF',
  secondary: '#8B5CF6',
  accent: '#FFD700',
  success: '#00FF99',
  blue: '#3B82F6',
  textPrimary: '#FFFFFF',
  textSecondary: 'rgba(255,255,255,0.7)',
  glass: 'rgba(17,17,17,0.6)',
  border: 'rgba(255,255,255,0.08)',
};

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: colors.primary, light: '#66EEFF', dark: '#00B8CC' },
    secondary: { main: colors.secondary, light: '#A78BFA', dark: '#7C3AED' },
    success: { main: colors.success },
    accent: { main: colors.accent },
    blue: { main: colors.blue },
    background: { default: colors.bg, paper: colors.paper },
    text: { primary: colors.textPrimary, secondary: colors.textSecondary },
    divider: colors.border,
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    h1: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 700,
      fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 600,
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 600,
      fontSize: 'clamp(1.5rem, 3vw, 2rem)',
      lineHeight: 1.3,
    },
    h4: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    h5: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 600,
      fontSize: '1.25rem',
    },
    h6: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 600,
      fontSize: '1rem',
    },
    body1: { fontSize: '1rem', lineHeight: 1.7 },
    body2: { fontSize: '0.875rem', lineHeight: 1.6 },
    button: { fontWeight: 600, textTransform: 'none' as const },
  },
  shape: { borderRadius: 20 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: colors.bg,
          color: colors.textPrimary,
          overflowX: 'hidden',
        },
        '*': { boxSizing: 'border-box' },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          padding: '12px 28px',
          fontWeight: 600,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
        contained: {
          boxShadow: `0 4px 20px ${alpha(colors.primary, 0.3)}`,
          '&:hover': {
            boxShadow: `0 8px 30px ${alpha(colors.primary, 0.5)}`,
            transform: 'translateY(-2px)',
          },
        },
        outlined: {
          borderColor: alpha(colors.primary, 0.4),
          '&:hover': {
            borderColor: colors.primary,
            backgroundColor: alpha(colors.primary, 0.08),
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: colors.paper,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: colors.paper,
          borderRadius: 20,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 16,
            transition: 'all 0.3s ease',
            '&.Mui-focused': {
              boxShadow: `0 0 20px ${alpha(colors.primary, 0.2)}`,
            },
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: colors.paper,
          borderRadius: '16px !important',
          border: `1px solid ${colors.border}`,
          '&:before': { display: 'none' },
          marginBottom: 12,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          boxShadow: 'none',
        },
      },
    },
  },
});

export default theme;
