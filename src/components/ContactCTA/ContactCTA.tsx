import { Box, Typography, Container, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { FaArrowRight, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
import { useMagnetic } from "../../hooks/useMagnetic";

export default function ContactCTA() {
  const magnetic = useMagnetic(0.2);

  return (
    <Box
      sx={{
        py: 10,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(0,229,255,0.05), rgba(139,92,246,0.05), rgba(255,215,0,0.03))",
        }}
      />
      <Box
        className="animate-blob"
        sx={{
          position: "absolute",
          width: 400,
          height: 400,
          background:
            "radial-gradient(circle, rgba(0,229,255,0.1), transparent)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          filter: "blur(80px)",
        }}
      />
      <Container
        maxWidth="md"
        sx={{ position: "relative", zIndex: 1, textAlign: "center" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" sx={{ mb: 2 }}>
            Ready to Start Your{" "}
            <Box component="span" className="gradient-text">
              Tech Journey?
            </Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", mb: 4, maxWidth: 500, mx: "auto" }}
          >
            Empowering businesses with innovative digital solutions. We build
            modern websites, scalable applications, and impactful digital
            experiences that drive growth.
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
          >
            <Button
              onMouseMove={magnetic.handleMouseMove}
              onMouseLeave={magnetic.handleMouseLeave}
              onMouseEnter={magnetic.handleMouseEnter}
              component={Link}
              to="/study"
              variant="contained"
              size="large"
              endIcon={<FaArrowRight />}
              sx={{
                background: "linear-gradient(135deg, #00E5FF, #3B82F6)",
                px: 4,
                py: 1.5,
                fontSize: "1.1rem",
              }}
            >
              Start Learning
            </Button>
            <Button
              component={Link}
              to="/contact"
              variant="outlined"
              size="large"
              startIcon={<FaPhone />}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: "1.1rem",
                borderColor: "rgba(255,255,255,0.2)",
              }}
            >
              Contact Us
            </Button>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
}
