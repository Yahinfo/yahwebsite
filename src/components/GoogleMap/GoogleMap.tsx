import { Box, Typography, Stack } from "@mui/material";
import {
  // FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import { COMPANY } from "../../constants/nav";
import Logo from "../../assets/yahtec.png";

export default function GoogleMap() {
  return (
    <Box>
      <Box
        sx={{
          height: { xs: 280, md: 500 }, // Increase/decrease as needed
          background: "#111111",
          borderRadius: "20px",
          border: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={Logo}
          alt="Company Logo"
          sx={{
            width: "80%",
            height: "80%",
            objectFit: "contain",
            // filter: "drop-shadow(0 0 30px rgba(0,229,255,0.4))",
            filter: "drop-shadow(0 0 30px rgba(255, 238, 0, 0.34))",
          }}
        />
      </Box>
      <Box sx={{ p: 3, background: "#111111" }}>
        <Stack spacing={2}>
          {/* <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
            <FaMapMarkerAlt color="#00E5FF" size={18} />
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>{COMPANY.address}</Typography>
          </Box> */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <FaPhone color="#00E5FF" size={16} />
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {COMPANY.phone}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <FaEnvelope color="#00E5FF" size={16} />
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {COMPANY.email}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <FaClock color="#00E5FF" size={16} />
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Mon - Sat: 9:00 AM - 7:00 PM
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
