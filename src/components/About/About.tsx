import { Box, Typography, Grid, Container } from "@mui/material";
import { motion } from "framer-motion";
import { getIcon } from "../../utils";
import { WHY_CHOOSE_US } from "../../constants/home";

export default function About() {
  return (
    <Box id="about" className="section">
      <Container maxWidth="lg">
        <Grid
          container
          spacing={6}
          sx={{
            alignItems: "center",
          }}
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="overline"
                sx={{
                  color: "primary.main",
                  letterSpacing: 3,
                  fontWeight: 600,
                }}
              >
                ABOUT US
              </Typography>

              <Typography variant="h2" sx={{ mt: 1, mb: 3 }}>
                Shaping the Future of{" "}
                <Box component="span" className="gradient-text">
                  Tech Education
                </Box>
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "text.secondary", mb: 3, maxWidth: 500 }}
              >
                YahTecInfo is a fast-growing technology startup offering
                innovative IT services, industry-focused internship programs,
                and professional software training courses. We empower students,
                fresh graduates, and businesses with practical skills,
                real-world project experience, and modern technology solutions
                to accelerate careers and drive digital transformation.
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "text.secondary", maxWidth: 500 }}
              >
                Our mission is to make quality tech education accessible to
                everyone, combining expert instruction, hands-on projects, and
                dedicated placement support to launch successful careers in
                technology.
              </Typography>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: "relative",
                borderRadius: "20px",
                overflow: "hidden",
                aspectRatio: "4/3",
                background:
                  "linear-gradient(135deg, rgba(0,229,255,0.1), rgba(139,92,246,0.1))",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  opacity: 0.8,
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, transparent 50%, rgba(5,5,5,0.8) 100%)",
                }}
              />
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mt: 10 }}>
          <Typography variant="h3" sx={{ textAlign: "center", mb: 6 }}>
            Why Choose{" "}
            <Box component="span" className="gradient-text">
              YahTecInfo
            </Box>
          </Typography>

          <Grid container spacing={3}>
            {WHY_CHOOSE_US.map((item, index) => {
              const Icon = getIcon(item.icon);

              return (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <Box
                      className="hover-lift"
                      sx={{
                        p: 3,
                        borderRadius: "20px",
                        background: "#111111",
                        border: "1px solid rgba(255,255,255,0.06)",
                        height: "100%",
                        transition: "all 0.4s ease",
                        "&:hover": {
                          borderColor: "rgba(0,229,255,0.2)",
                          boxShadow: "0 20px 60px rgba(0,229,255,0.08)",
                          "& .about-icon": {
                            transform: "scale(1.1)",
                            boxShadow: "0 0 30px rgba(0,229,255,0.3)",
                          },
                        },
                      }}
                    >
                      <Box
                        className="about-icon"
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: "14px",
                          background:
                            "linear-gradient(135deg, rgba(0,229,255,0.15), rgba(139,92,246,0.15))",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mb: 2,
                          color: "primary.main",
                          fontSize: "1.3rem",
                          transition: "all 0.4s ease",
                        }}
                      >
                        <Icon />
                      </Box>

                      <Typography variant="h6" sx={{ mb: 1 }}>
                        {item.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
