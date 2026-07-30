import {
  Box, Container, Grid, Typography, Stack, Divider, IconButton, TextField, Button,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaArrowRight } from 'react-icons/fa';
import { COMPANY } from '../../constants/nav';
import { subscribeNewsletter } from '../../services/api';
import { useState } from 'react';
import { Snackbar, Alert } from '@mui/material';

const FOOTER_LINKS = {
  Programs: [
    { label: 'Study Programs', path: '/study' },
    { label: 'Internship', path: '/internship' },
    { label: 'Full Stack', path: '/courses/fullstack' },
    { label: 'React JS', path: '/courses/reactjs' },
  ],
  Services: [
    { label: 'Web Development', path: '/services' },
    { label: 'Testing', path: '/services' },
    { label: 'SEO', path: '/services' },
    { label: 'Maintenance', path: '/services' },
  ],
  Company: [
    { label: 'About Us', path: '/#about' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
    { label: 'Careers', path: '/contact' },
  ],
};

const SOCIAL = [
  { icon: FaFacebook, url: COMPANY.social.facebook, label: 'Facebook' },
  { icon: FaTwitter, url: COMPANY.social.twitter, label: 'Twitter' },
  { icon: FaLinkedin, url: COMPANY.social.linkedin, label: 'LinkedIn' },
  { icon: FaInstagram, url: COMPANY.social.instagram, label: 'Instagram' },
  { icon: FaYoutube, url: COMPANY.social.youtube, label: 'YouTube' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [snack, setSnack] = useState({ open: false, message: '', severity: 'success' as 'success' | 'error' });

  const handleSubscribe = async () => {
    if (!email) return;
    const result = await subscribeNewsletter(email);
    setSnack({ open: true, message: result.message, severity: result.success ? 'success' : 'error' });
    if (result.success) setEmail('');
  };

  return (
    <Box
      component="footer"
      sx={{
        background: '#0A0A0A',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        pt: 8,
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box
                  sx={{
                    width: 40, height: 40, borderRadius: '12px',
                    background: 'linear-gradient(135deg, #00E5FF, #8B5CF6)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 800, color: '#050505',
                  }}
                >
                  Y
                </Box>
                <Typography variant="h6" sx={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700 }}>
                  {COMPANY.name}
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: 'text.secondary', maxWidth: 300 }}>
                {COMPANY.tagline}. Transforming careers through world-class software training and IT services.
              </Typography>
              <Stack direction="row" spacing={1}>
                {SOCIAL.map(({ icon: Icon, url, label }) => (
                  <IconButton
                    key={label}
                    component="a"
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    sx={{
                      color: 'text.secondary',
                      border: '1px solid rgba(255,255,255,0.08)',
                      '&:hover': { color: 'primary.main', borderColor: 'primary.main', boxShadow: '0 0 20px rgba(0,229,255,0.2)' },
                    }}
                  >
                    <Icon size={18} />
                  </IconButton>
                ))}
              </Stack>
            </Stack>
          </Grid>

          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <Grid size={{ xs: 6, md: 2 }} key={title}>
              <Typography variant="h6" sx={{ mb: 2, fontSize: '0.95rem', color: 'text.primary' }}>
                {title}
              </Typography>
              <Stack spacing={1}>
                {links.map((link) => (
                  <Typography
                    key={link.label}
                    component={Link}
                    to={link.path}
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      textDecoration: 'none',
                      transition: 'color 0.3s',
                      '&:hover': { color: 'primary.main' },
                    }}
                  >
                    {link.label}
                  </Typography>
                ))}
              </Stack>
            </Grid>
          ))}

          <Grid size={{ xs: 12, md: 2 }}>
            <Typography variant="h6" sx={{ mb: 2, fontSize: '0.95rem' }}>
              Newsletter
            </Typography>
            <Stack spacing={1.5}>
              <TextField
                size="small"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
              />
              <Button
                variant="contained"
                endIcon={<FaArrowRight />}
                onClick={handleSubscribe}
                sx={{ background: 'linear-gradient(135deg, #00E5FF, #3B82F6)', borderRadius: '12px' }}
              >
                Subscribe
              </Button>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.06)' }} />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {COMPANY.email} | {COMPANY.phone}
          </Typography>
        </Box>
      </Container>

      <Snackbar open={snack.open} autoHideDuration={4000} onClose={() => setSnack({ ...snack, open: false })}>
        <Alert severity={snack.severity} variant="filled">{snack.message}</Alert>
      </Snackbar>
    </Box>
  );
}
