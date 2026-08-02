// import { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  // TextField,
  Button,
  Stack,
  // Snackbar,
  // Alert,
  ImageList,
  ImageListItem,
} from "@mui/material";
import { motion } from "framer-motion";
import AnimatedBackground from "../../components/AnimatedBackground/AnimatedBackground";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import PricingCard from "../../components/PricingCard/PricingCard";
import { SERVICES, PRICING_PLANS } from "../../constants/services";
// import { submitQuoteForm } from "../../services/api";
import { useNavigate } from "react-router-dom";

const GALLERY = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
  "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&q=80",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
  "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&q=80",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=80",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=80",
];

export default function Services() {
  // const [form, setForm] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   service: "",
  //   message: "",
  // });
  const navigate = useNavigate();

  // const [snack, setSnack] = useState({
  //   open: false,
  //   message: "",
  //   severity: "success" as "success" | "error",
  // });

  const handleSubmit = async () => {
    // const result = await submitQuoteForm(form);
    // setSnack({
    //   open: true,
    //   message: result.message,
    //   severity: result.success ? "success" : "error",
    // });
    // if (result.success)
    //   setForm({ name: "", email: "", phone: "", service: "", message: "" });
    navigate("/contact");
  };

  return (
    <Box sx={{ position: "relative" }}>
      <AnimatedBackground variant="mesh" />

      <Box sx={{ py: 10, position: "relative", zIndex: 1 }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Typography
              variant="overline"
              sx={{ color: "accent.main", letterSpacing: 3 }}
            >
              IT SERVICES
            </Typography>
            <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>
              Premium{" "}
              <Box component="span" className="gradient-text">
                Web Solutions
              </Box>
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", maxWidth: 600, mb: 6 }}
            >
              From stunning business websites to complex web applications, we
              deliver world-class digital solutions tailored to your needs.
            </Typography>
          </motion.div>

          <Grid container spacing={3} sx={{ mb: 10 }}>
            {SERVICES.map((service, i) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={service.id}>
                <ServiceCard service={service} index={i} />
              </Grid>
            ))}
          </Grid>

          {/* Pricing */}
          <Typography variant="h3" sx={{ textAlign: "center", mb: 6 }}>
            Transparent{" "}
            <Box component="span" className="gradient-text">
              Pricing
            </Box>
          </Typography>
          <Grid container spacing={3} sx={{ mb: 10 }}>
            {PRICING_PLANS.map((plan, i) => (
              <Grid size={{ xs: 12, md: 4 }} key={plan.id}>
                <PricingCard plan={plan} index={i} />
              </Grid>
            ))}
          </Grid>

          {/* Gallery */}
          <Typography variant="h3" sx={{ textAlign: "center", mb: 4 }}>
            Project{" "}
            <Box component="span" className="gradient-text">
              Gallery
            </Box>
          </Typography>
          <ImageList cols={3} gap={16} sx={{ mb: 10 }}>
            {GALLERY.map((img, i) => (
              <ImageListItem
                key={i}
                sx={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  "& img": {
                    transition: "transform 0.6s ease",
                    borderRadius: "16px",
                  },
                  "&:hover img": { transform: "scale(1.08)" },
                }}
              >
                <Box
                  component="img"
                  src={img}
                  alt={`Project ${i + 1}`}
                  loading="lazy"
                  sx={{ borderRadius: "16px" }}
                />
              </ImageListItem>
            ))}
          </ImageList>

          {/* Quote Form */}
          <Box
            sx={{
              maxWidth: 600,
              mx: "auto",
              p: 4,
              borderRadius: "20px",
              background: "#111111",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {/* <Typography variant="h4" sx={{ textAlign: "center", mb: 3 }}>
              Get a Free Quote
            </Typography> */}
            <Stack spacing={2}>
              {/* <TextField
                label="Name"
                fullWidth
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <TextField
                label="Email"
                fullWidth
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <TextField
                label="Phone"
                fullWidth
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
              <TextField
                label="Service Required"
                fullWidth
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
              />
              <TextField
                label="Message"
                fullWidth
                multiline
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              /> */}
              <Button
                variant="contained"
                size="large"
                onClick={handleSubmit}
                sx={{
                  background: "linear-gradient(135deg, #FFD700, #F97316)",
                  color: "#050505",
                }}
              >
                Contact Us
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* <Snackbar
        open={snack.open}
        autoHideDuration={4000}
        onClose={() => setSnack({ ...snack, open: false })}
      >
        <Alert severity={snack.severity} variant="filled">
          {snack.message}
        </Alert>
      </Snackbar> */}
    </Box>
  );
}
