import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import { FaCheck, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import AnimatedBackground from "../../components/AnimatedBackground/AnimatedBackground";
import TimelineComponent from "../../components/Timeline/Timeline";
import {
  INTERNSHIP_BENEFITS,
  INTERNSHIP_TIMELINE,
  DAILY_TASKS,
} from "../../constants/internship";
import { getIcon } from "../../utils";

export default function Internship() {
  return (
    <Box sx={{ position: "relative" }}>
      <AnimatedBackground variant="aurora" />

      {/* Hero */}
      <Box sx={{ py: 10, position: "relative", zIndex: 1 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <Typography
                  variant="overline"
                  sx={{ color: "secondary.main", letterSpacing: 3 }}
                >
                  INTERNSHIP PROGRAM
                </Typography>
                <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>
                  Launch Your Career with{" "}
                  <Box component="span" className="gradient-text">
                    Live Projects
                  </Box>
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "text.secondary", mb: 4 }}
                >
                  Our 12-week internship program puts you in real development
                  environments, working on client projects with expert mentors
                  guiding every step.
                </Typography>
                <Button
                  component={Link}
                  to="/contact"
                  variant="contained"
                  size="large"
                  endIcon={<FaArrowRight />}
                  sx={{
                    background: "linear-gradient(135deg, #8B5CF6, #EC4899)",
                    px: 4,
                    py: 1.5,
                  }}
                >
                  Apply Now
                </Button>
              </motion.div>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80"
                  alt="Internship"
                  sx={{
                    width: "100%",
                    borderRadius: "20px",
                    border: "1px solid rgba(139,92,246,0.2)",
                  }}
                />
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Benefits */}
      <Box sx={{ py: 8, position: "relative", zIndex: 1 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ textAlign: "center", mb: 6 }}>
            Program{" "}
            <Box component="span" className="gradient-text">
              Benefits
            </Box>
          </Typography>
          <Grid container spacing={3}>
            {INTERNSHIP_BENEFITS.map((b, i) => {
              const Icon = getIcon(b.icon);
              return (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={b.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Card
                      sx={{
                        background: "#111111",
                        border: "1px solid rgba(255,255,255,0.06)",
                        borderRadius: "20px",
                        height: "100%",
                        "&:hover": {
                          borderColor: "rgba(139,92,246,0.3)",
                          transform: "translateY(-4px)",
                          transition: "all 0.3s",
                        },
                      }}
                    >
                      <CardContent sx={{ p: 3 }}>
                        <Box
                          sx={{
                            color: "secondary.main",
                            fontSize: "1.5rem",
                            mb: 2,
                          }}
                        >
                          <Icon />
                        </Box>
                        <Typography variant="h6" sx={{ mb: 1 }}>
                          {b.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "text.secondary" }}
                        >
                          {b.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* Timeline & Daily Tasks */}
      <Box sx={{ py: 8, position: "relative", zIndex: 1 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h4" sx={{ mb: 4 }}>
                Program Timeline
              </Typography>
              <TimelineComponent items={INTERNSHIP_TIMELINE} />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h4" sx={{ mb: 4 }}>
                Daily Tasks
              </Typography>
              <List>
                {DAILY_TASKS.map((task) => (
                  <ListItem key={task} sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <FaCheck color="#00FF99" size={16} />
                    </ListItemIcon>
                    <ListItemText
                      primary={task}
                      primaryTypographyProps={{
                        variant: "body1",
                        color: "text.secondary",
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Mentors */}
      {/* <Box sx={{ py: 8, position: "relative", zIndex: 1 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ textAlign: "center", mb: 6 }}>
            Meet Your{" "}
            <Box component="span" className="gradient-text">
              Mentors
            </Box>
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {MENTORS.map((mentor, i) => (
              <Grid size={{ xs: 6, sm: 3 }} key={mentor.name}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Box sx={{ textAlign: "center" }}>
                    <Avatar
                      sx={{
                        width: 80,
                        height: 80,
                        mx: "auto",
                        mb: 2,
                        background: "linear-gradient(135deg, #8B5CF6, #EC4899)",
                        fontSize: "1.5rem",
                        fontWeight: 700,
                        color: "#fff",
                      }}
                    >
                      {mentor.avatar}
                    </Avatar>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      {mentor.name}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: "primary.main" }}
                    >
                      {mentor.role}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ display: "block", color: "text.secondary" }}
                    >
                      {mentor.expertise}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box> */}

      {/* CTA */}
      <Box sx={{ py: 8, textAlign: "center", position: "relative", zIndex: 1 }}>
        <Container maxWidth="sm">
          <Typography variant="h4" sx={{ mb: 2 }}>
            Ready to Begin?
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", mb: 4 }}>
            Limited seats available. Apply now and start your journey to a
            successful tech career.
          </Typography>
          <Button
            component={Link}
            to="/contact"
            variant="contained"
            size="large"
            endIcon={<FaArrowRight />}
            sx={{
              background: "linear-gradient(135deg, #8B5CF6, #EC4899)",
              px: 5,
            }}
          >
            Apply for Internship
          </Button>
        </Container>
      </Box>
    </Box>
  );
}
