import { Box, Typography, Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MEGA_MENU_ITEMS } from '../../constants/nav';
import { getIcon } from '../../utils';

export default function MegaMenu() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <Box
        sx={{
          background: 'rgba(5, 5, 5, 0.95)',
          backdropFilter: 'blur(30px)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          py: 4,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {MEGA_MENU_ITEMS.map((item, index) => {
              const Icon = getIcon(item.icon);
              return (
                <Grid size={{ xs: 12, md: 4 }} key={item.title}>
                  <Box
                    component={Link}
                    to={item.path}
                    sx={{
                      display: 'block',
                      textDecoration: 'none',
                      p: 3,
                      borderRadius: '20px',
                      background: '#111111',
                      border: '1px solid rgba(255,255,255,0.06)',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover': {
                        transform: 'translateY(-8px) perspective(1000px) rotateX(2deg)',
                        borderColor: 'rgba(0,229,255,0.3)',
                        boxShadow: '0 20px 60px rgba(0,229,255,0.15)',
                        '& .mega-icon': {
                          transform: 'scale(1.1) rotate(5deg)',
                          boxShadow: '0 0 30px rgba(0,229,255,0.4)',
                        },
                      },
                    }}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Box
                        className="mega-icon"
                        sx={{
                          width: 56, height: 56, borderRadius: '16px',
                          background: item.gradient,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          mb: 2, transition: 'all 0.4s ease',
                          color: '#050505', fontSize: '1.5rem',
                        }}
                      >
                        <Icon />
                      </Box>
                      <Typography variant="h6" sx={{ color: 'text.primary', mb: 1, fontWeight: 600 }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                        {item.description}
                      </Typography>
                    </motion.div>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </motion.div>
  );
}
