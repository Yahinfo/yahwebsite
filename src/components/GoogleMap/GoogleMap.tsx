import { Box, Typography, Stack } from '@mui/material';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import { COMPANY } from '../../constants/nav';

export default function GoogleMap() {
  return (
    <Box sx={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', height: '100%', minHeight: 400 }}>
      <Box
        component="iframe"
        src="https://maps.google.com/maps?q=Bangalore+Tech+Park&t=&z=13&ie=UTF8&iwloc=&output=embed"
        sx={{ width: '100%', height: 350, border: 0, filter: 'grayscale(80%) invert(92%) contrast(90%)' }}
        title="YahTecInfo Location"
        loading="lazy"
      />
      <Box sx={{ p: 3, background: '#111111' }}>
        <Stack spacing={2}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
            <FaMapMarkerAlt color="#00E5FF" size={18} />
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>{COMPANY.address}</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <FaPhone color="#00E5FF" size={16} />
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>{COMPANY.phone}</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <FaEnvelope color="#00E5FF" size={16} />
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>{COMPANY.email}</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <FaClock color="#00E5FF" size={16} />
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>Mon - Sat: 9:00 AM - 7:00 PM</Typography>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
