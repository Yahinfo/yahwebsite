import { Box, Typography, Container, Grid, Chip, Stack } from '@mui/material';
import CourseCard from '../../components/CourseCard/CourseCard';
import { COURSES } from '../../constants/courses';
import AnimatedBackground from '../../components/AnimatedBackground/AnimatedBackground';
import { motion } from 'framer-motion';

const CATEGORIES = ['All', 'Frontend', 'Backend', 'Full Stack', 'Cloud', 'QA', 'Database', 'DevOps', 'Career'];

export default function Study() {
  return (
    <Box sx={{ position: 'relative' }}>
      <AnimatedBackground variant="mesh" />

      {/* Banner */}
      <Box sx={{ py: 10, position: 'relative', zIndex: 1 }}>
        <Container maxWidth="lg">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: 3 }}>
              LEARNING PROGRAMS
            </Typography>
            <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>
              Explore Our <Box component="span" className="gradient-text">Courses</Box>
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 600, mb: 4 }}>
              18+ comprehensive courses covering everything from web fundamentals to advanced
              full-stack development, cloud computing, and career preparation.
            </Typography>
            <Stack direction="row" flexWrap="wrap" gap={1}>
              {CATEGORIES.map((cat) => (
                <Chip
                  key={cat}
                  label={cat}
                  sx={{
                    background: cat === 'All' ? 'rgba(0,229,255,0.15)' : 'rgba(255,255,255,0.05)',
                    color: cat === 'All' ? 'primary.main' : 'text.secondary',
                    fontWeight: 600,
                    '&:hover': { background: 'rgba(0,229,255,0.1)', color: 'primary.main' },
                  }}
                />
              ))}
            </Stack>
          </motion.div>
        </Container>
      </Box>

      {/* Course Grid */}
      <Box sx={{ pb: 10, position: 'relative', zIndex: 1 }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {COURSES.map((course, i) => (
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={course.id}>
                <CourseCard course={course} index={i} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
