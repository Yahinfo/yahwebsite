import { Box, Typography, Container, Grid, Button, Stack, Chip, Rating, Card, CardContent, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import { FaCheck, FaClock, FaUsers, FaCertificate, FaArrowRight, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';
import AnimatedBackground from '../../components/AnimatedBackground/AnimatedBackground';
import FAQ from '../../components/FAQ/FAQ';
import { getIcon } from '../../utils';
import type { Course } from '../../types';

interface CourseDetailsPageProps {
  course: Course;
}

export default function CourseDetailsPage({ course }: CourseDetailsPageProps) {
  const Icon = getIcon(course.icon);

  return (
    <Box sx={{ position: 'relative' }}>
      <AnimatedBackground variant="mesh" />

      {/* Banner */}
      <Box
        sx={{
          py: 8, position: 'relative', zIndex: 1,
          background: `linear-gradient(135deg, ${course.color}10, transparent)`,
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 8 }}>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                  <Chip label={course.category} size="small" sx={{ background: `${course.color}15`, color: course.color }} />
                  <Chip label={course.level} size="small" variant="outlined" />
                </Stack>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <Box sx={{ width: 56, height: 56, borderRadius: '14px', background: `${course.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: course.color, fontSize: '1.8rem' }}>
                    <Icon />
                  </Box>
                  <Typography variant="h2">{course.title}</Typography>
                </Box>
                <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 600, mb: 3 }}>
                  {course.description}
                </Typography>
                <Stack direction="row" spacing={3}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <FaClock color={course.color} />
                    <Typography variant="body2">{course.duration}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <FaUsers color={course.color} />
                    <Typography variant="body2">{course.students.toLocaleString()} students</Typography>
                  </Box>
                  <Rating value={course.rating} readOnly precision={0.1} size="small" sx={{ color: '#FFD700' }} />
                </Stack>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6, position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4}>
          {/* Main Content */}
          <Grid size={{ xs: 12, md: 8 }}>
            {/* Modules */}
            <Box sx={{ mb: 6 }}>
              <Typography variant="h4" sx={{ mb: 3 }}>Course Modules</Typography>
              {course.modules.map((mod, i) => (
                <motion.div key={mod.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <Card sx={{ mb: 2, background: '#111111', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px' }}>
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="h6">Module {i + 1}: {mod.title}</Typography>
                        <Chip label={mod.duration} size="small" sx={{ background: `${course.color}10`, color: course.color }} />
                      </Box>
                      <List dense>
                        {mod.topics.map((topic) => (
                          <ListItem key={topic} sx={{ py: 0.3, px: 0 }}>
                            <ListItemIcon sx={{ minWidth: 28 }}><FaCheck color={course.color} size={12} /></ListItemIcon>
                            <ListItemText primary={topic} primaryTypographyProps={{ variant: 'body2', color: 'text.secondary' }} />
                          </ListItem>
                        ))}
                      </List>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </Box>

            {/* Projects */}
            <Box sx={{ mb: 6 }}>
              <Typography variant="h4" sx={{ mb: 3 }}>Projects</Typography>
              <Grid container spacing={2}>
                {course.projects.map((project, i) => (
                  <Grid size={{ xs: 12, sm: 4 }} key={project}>
                    <Card sx={{ background: `${course.color}08`, border: `1px solid ${course.color}20`, borderRadius: '16px', textAlign: 'center', p: 2 }}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>{project}</Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>Project {i + 1}</Typography>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>

            {/* Tools & Career */}
            <Grid container spacing={4} sx={{ mb: 6 }}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Typography variant="h5" sx={{ mb: 2 }}>Tools & Technologies</Typography>
                <Stack direction="row" flexWrap="wrap" gap={1}>
                  {course.tools.map((tool) => (
                    <Chip key={tool} label={tool} sx={{ background: 'rgba(255,255,255,0.05)' }} />
                  ))}
                </Stack>
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Typography variant="h5" sx={{ mb: 2 }}>Career Paths</Typography>
                <Stack direction="row" flexWrap="wrap" gap={1}>
                  {course.career.map((c) => (
                    <Chip key={c} label={c} sx={{ background: `${course.color}10`, color: course.color }} />
                  ))}
                </Stack>
              </Grid>
            </Grid>

            {/* Requirements */}
            <Box sx={{ mb: 6 }}>
              <Typography variant="h5" sx={{ mb: 2 }}>Requirements</Typography>
              <List>
                {course.requirements.map((req) => (
                  <ListItem key={req} sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 32 }}><FaCheck color="#00FF99" size={14} /></ListItemIcon>
                    <ListItemText primary={req} />
                  </ListItem>
                ))}
              </List>
            </Box>

            {/* Reviews */}
            <Box sx={{ mb: 6 }}>
              <Typography variant="h4" sx={{ mb: 3 }}>Student Reviews</Typography>
              <Card sx={{ background: '#111111', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <Rating value={course.rating} readOnly precision={0.1} sx={{ color: '#FFD700' }} />
                  <Typography variant="h5" sx={{ fontWeight: 700 }}>{course.rating}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>({course.students} reviews)</Typography>
                </Box>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontStyle: 'italic' }}>
                  &ldquo;Excellent course! The curriculum is well-structured and the projects helped me build a strong portfolio. Highly recommended for anyone looking to master {course.title}.&rdquo;
                </Typography>
              </Card>
            </Box>
          </Grid>

          {/* Sticky Sidebar */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ position: { md: 'sticky' }, top: 100 }}>
              <Card
                sx={{
                  background: 'linear-gradient(145deg, #111111, #1a1a1a)',
                  border: `1px solid ${course.color}30`,
                  borderRadius: '20px',
                  p: 3,
                  boxShadow: `0 20px 60px ${course.color}10`,
                }}
              >
                <Typography variant="h4" sx={{ color: course.color, fontWeight: 700, mb: 1 }}>
                  {course.price}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>{course.duration} · {course.level}</Typography>
                <Divider sx={{ mb: 3, borderColor: 'rgba(255,255,255,0.06)' }} />
                <Stack spacing={1.5} sx={{ mb: 3 }}>
                  {['Lifetime access', 'Certificate of completion', 'Placement support', 'Live sessions', 'Project reviews'].map((item) => (
                    <Box key={item} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <FaCertificate color={course.color} size={14} />
                      <Typography variant="body2">{item}</Typography>
                    </Box>
                  ))}
                </Stack>
                <Button
                  component={Link} to="/contact"
                  variant="contained" fullWidth size="large"
                  endIcon={<FaArrowRight />}
                  sx={{ mb: 1.5, background: `linear-gradient(135deg, ${course.color}, #8B5CF6)`, py: 1.5 }}
                >
                  Enroll Now
                </Button>
                <Button
                  component={Link} to="/contact"
                  variant="outlined" fullWidth size="large"
                  startIcon={<FaPhone />}
                  sx={{ borderColor: `${course.color}40`, color: course.color }}
                >
                  Contact Us
                </Button>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <FAQ items={course.faqs} title="Course FAQs" />
    </Box>
  );
}
