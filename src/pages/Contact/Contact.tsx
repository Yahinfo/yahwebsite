import { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  TextField,
  Button,
  Stack,
  Snackbar,
  Alert,
  IconButton,
  // MenuItem,
} from "@mui/material";
import {
  FaFacebook,
  // FaTwitter,
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { motion } from "framer-motion";
import AnimatedBackground from "../../components/AnimatedBackground/AnimatedBackground";
// import GoogleMap from "../../components/GoogleMap/GoogleMap";
import { COMPANY } from "../../constants/nav";
// import { COURSES } from "../../constants/courses";
import { submitContactForm } from "../../services/api";
import emailjs from "@emailjs/browser";
import GoogleMap from "../../components/GoogleMap/GoogleMap";
const SOCIAL = [
  { icon: FaFacebook, url: COMPANY.social.facebook },
  // { icon: FaTwitter, url: COMPANY.social.twitter },
  { icon: FaWhatsapp, url: COMPANY.social.whatsapp },

  { icon: FaLinkedin, url: COMPANY.social.linkedin },
  { icon: FaInstagram, url: COMPANY.social.instagram },
  { icon: FaYoutube, url: COMPANY.social.youtube },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    message: "",
  });
  const [snack, setSnack] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  });

  // const handleSubmit = async () => {
  // const result = await submitContactForm(form);
  // setSnack({ open: true, message: result.message, severity: result.success ? 'success' : 'error' });
  // if (result.success) setForm({ name: '', phone: '', email: '', course: '', message: '' });
  // };
  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const handleSubmit = async () => {
    if (!form.name.trim()) {
      setSnack({
        open: true,
        message: "Name is required",
        severity: "error",
      });
      return;
    }

    if (!form.email.trim()) {
      setSnack({
        open: true,
        message: "Email is required",
        severity: "error",
      });
      return;
    }

    if (!isValidEmail(form.email)) {
      setSnack({
        open: true,
        message: "Please enter a valid email",
        severity: "error",
      });
      return;
    }

    if (!form.phone.trim()) {
      setSnack({
        open: true,
        message: "Phone number is required",
        severity: "error",
      });
      return;
    }

    try {
      const apiResult = await submitContactForm(form);

      if (!apiResult.success) {
        setSnack({
          open: true,
          message: apiResult.message,
          severity: "error",
        });
        return;
      }

      const templateParams = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        course: form.course,
        message: form.message,
        time: new Date().toLocaleString(),
      };

      await emailjs.send(
        "service_z3mxh7d",
        "template_pdf2spn",
        templateParams,
        "b0kgOz7BA7ErFVpvs",
      );

      setSnack({
        open: true,
        message: "Message sent successfully!",
        severity: "success",
      });

      setForm({
        name: "",
        phone: "",
        email: "",
        course: "",
        message: "",
      });
    } catch (err) {
      console.error(err);

      setSnack({
        open: true,
        message: "Failed to send message",
        severity: "error",
      });
    }
  };
  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <Box sx={{ position: "relative" }}>
      <AnimatedBackground variant="aurora" />

      <Container maxWidth="lg" sx={{ py: 8, position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Typography
            variant="overline"
            sx={{ color: "primary.main", letterSpacing: 3 }}
          >
            GET IN TOUCH
          </Typography>
          <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>
            Contact{" "}
            <Box component="span" className="gradient-text">
              YahTecInfo
            </Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", mb: 6, maxWidth: 500 }}
          >
            Have questions about our courses or services? We would love to hear
            from you.
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              sx={{
                p: 4,
                borderRadius: "20px",
                background: "#111111",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <Typography variant="h5" sx={{ mb: 3 }}>
                Send us a Message
              </Typography>
              <Stack spacing={2.5}>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      label="Name *"
                      name="name"
                      fullWidth
                      value={form.name}
                      // onChange={(e) =>
                      //   setForm({ ...form, name: e.target.value })
                      // }
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      name="phone"
                      label="Phone *"
                      fullWidth
                      value={form.phone}
                      // onChange={(e) =>
                      //   setForm({ ...form, phone: e.target.value })
                      // }
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
                <TextField
                  label="Email *"
                  fullWidth
                  name="email"
                  type="email"
                  value={form.email}
                  // onChange={(e) => setForm({ ...form, email: e.target.value })}
                  onChange={handleChange}
                />
                {/* <TextField
                  select
                  label="Course Interest"
                  fullWidth
                  name="course"
                  value={form.course}
                  // onChange={(e) => setForm({ ...form, course: e.target.value })}
                  onChange={handleChange}
                >
                  <MenuItem value="">Select a course</MenuItem>
                  {COURSES.map((c) => (
                    <MenuItem key={c.id} value={c.title}>
                      {c.title}
                    </MenuItem>
                  ))}
                </TextField> */}
                <TextField
                  label="Message (optional)"
                  fullWidth
                  name="message"
                  multiline
                  rows={4}
                  value={form.message}
                  // onChange={(e) =>
                  //   setForm({ ...form, message: e.target.value })
                  // }
                  onChange={handleChange}
                />
                <Button
                  variant="contained"
                  size="large"
                  onClick={handleSubmit}
                  sx={{
                    background: "linear-gradient(135deg, #00E5FF, #3B82F6)",
                    py: 1.5,
                  }}
                >
                  Send Message
                </Button>
              </Stack>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={3} sx={{ height: "100%" }}>
              {/* Logo Section */}
              <GoogleMap />

              {/* Follow Us */}
              <Box
                sx={{
                  p: 3,
                  borderRadius: "20px",
                  background: "#111111",
                  border: "1px solid rgba(255,255,255,0.06)",
                  textAlign: "center",
                }}
              >
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Follow Us
                </Typography>

                <Stack direction="row" spacing={1} justifyContent="center">
                  {SOCIAL.map(({ icon: Icon, url }, i) => (
                    <IconButton
                      key={i}
                      component="a"
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: "text.secondary",
                        border: "1px solid rgba(255,255,255,0.08)",
                        "&:hover": {
                          color: "primary.main",
                          borderColor: "primary.main",
                          boxShadow: "0 0 20px rgba(0,229,255,0.2)",
                        },
                      }}
                    >
                      <Icon size={20} />
                    </IconButton>
                  ))}
                </Stack>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={snack.open}
        autoHideDuration={4000}
        onClose={() => setSnack({ ...snack, open: false })}
      >
        <Alert severity={snack.severity} variant="filled">
          {snack.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
