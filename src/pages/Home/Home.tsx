import { useEffect, useRef } from "react";
import { Box, Typography, Container, Stack, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Typed from "typed.js";
import { FaArrowRight, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
import AnimatedBackground from "../../components/AnimatedBackground/AnimatedBackground";
import ParticlesBackground from "../../components/Particles/Particles";
import Hero3D from "../../components/AnimatedBackground/Hero3D";
import Counter from "../../components/Counter/Counter";
import PartnerLogos from "../../components/PartnerLogos/PartnerLogos";
import About from "../../components/About/About";
import CourseCard from "../../components/CourseCard/CourseCard";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import Testimonials from "../../components/Testimonials/Testimonials";
import FAQ from "../../components/FAQ/FAQ";
import BlogPreview from "../../components/BlogPreview/BlogPreview";
import ContactCTA from "../../components/ContactCTA/ContactCTA";
import { getPopularCourses } from "../../constants/courses";
import { SERVICES } from "../../constants/services";
import { TESTIMONIALS, FAQS, BLOG_POSTS } from "../../constants/content";
import { useMagnetic } from "../../hooks/useMagnetic";

export default function Home() {
  const typedRef = useRef<HTMLSpanElement>(null);
  const magnetic = useMagnetic(0.25);

  useEffect(() => {
    if (!typedRef.current) return;
    const typed = new Typed(typedRef.current, {
      strings: [
        "Software Training",
        "IT Services",
        "Career Growth",
        "Live Internships",
        "Placement Support",
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 2000,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          mt: -10,
          pt: 10,
        }}
      >
        <AnimatedBackground variant="aurora" />
        <ParticlesBackground />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Typography
                  variant="overline"
                  sx={{
                    color: "primary.main",
                    letterSpacing: 4,
                    fontWeight: 600,
                    mb: 2,
                    display: "block",
                  }}
                >
                  WELCOME TO YAHTECINFO
                </Typography>
                <Typography variant="h1" sx={{ mb: 2 }}>
                  Master{" "}
                  <Box component="span" className="gradient-text">
                    <Box component="span" ref={typedRef} />
                  </Box>
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    mb: 4,
                    maxWidth: 500,
                    fontSize: "1.15rem",
                  }}
                >
                  Transform your career with world-class software training, live
                  internships, and premium IT services. Join 5000+ successful
                  graduates.
                </Typography>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
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
                      py: 1.8,
                      fontSize: "1.05rem",
                      boxShadow: "0 8px 30px rgba(0,229,255,0.3)",
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
                      py: 1.8,
                      fontSize: "1.05rem",
                      borderColor: "rgba(255,255,255,0.2)",
                    }}
                  >
                    Contact Us
                  </Button>
                </Stack>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <Hero3D />
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Counter />
      <PartnerLogos />
      <About />

      {/* Popular Courses */}
      <Box className="section">
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 6 }} data-aos="fade-up">
            <Typography variant="h3" sx={{ mb: 2 }}>
              Popular{" "}
              <Box component="span" className="gradient-text">
                Courses
              </Box>
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", maxWidth: 500, mx: "auto" }}
            >
              Industry-aligned programs designed to get you job-ready
            </Typography>
          </Box>
          <Grid container spacing={3}>
            {getPopularCourses().map((course, i) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={course.id}>
                <CourseCard course={course} index={i} />
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: "center", mt: 4 }}>
            <Button
              component={Link}
              to="/study"
              variant="outlined"
              endIcon={<FaArrowRight />}
              sx={{ px: 4 }}
            >
              View All Courses
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Services Preview */}
      <Box className="section" sx={{ background: "rgba(0,229,255,0.02)" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{ textAlign: "center", mb: 6 }}
            data-aos="fade-up"
          >
            Our{" "}
            <Box component="span" className="gradient-text">
              Services
            </Box>
          </Typography>
          <Grid container spacing={3}>
            {SERVICES.slice(0, 6).map((service, i) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={service.id}>
                <ServiceCard service={service} index={i} />
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: "center", mt: 4 }}>
            <Button
              component={Link}
              to="/services"
              variant="outlined"
              endIcon={<FaArrowRight />}
            >
              Explore Services
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Internship Teaser */}
      <Box className="section">
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }} data-aos="fade-right">
              <Typography variant="h3" sx={{ mb: 2 }}>
                Live{" "}
                <Box component="span" className="gradient-text">
                  Internship
                </Box>{" "}
                Program
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "text.secondary", mb: 3 }}
              >
                Work on real client projects, build your portfolio, and get
                placement-ready with our comprehensive 12-week internship
                program.
              </Typography>
              <Button
                component={Link}
                to="/internship"
                variant="contained"
                endIcon={<FaArrowRight />}
                sx={{ background: "linear-gradient(135deg, #8B5CF6, #EC4899)" }}
              >
                Apply Now
              </Button>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }} data-aos="fade-left">
              <Box
                sx={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  border: "1px solid rgba(139,92,246,0.2)",
                  boxShadow: "0 20px 60px rgba(139,92,246,0.15)",
                }}
              >
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                  alt="Internship program"
                  sx={{ width: "100%", height: 350, objectFit: "cover" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Testimonials items={TESTIMONIALS} />
      <FAQ items={FAQS} />
      <BlogPreview posts={BLOG_POSTS} />
      <ContactCTA />
    </Box>
  );
}
