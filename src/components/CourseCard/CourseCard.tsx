import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTilt } from "../../hooks/useTilt";
import { getIcon } from "../../utils";
import type { Course } from "../../types";

interface CourseCardProps {
  course: Course;
  index?: number;
}

export default function CourseCard({ course, index = 0 }: CourseCardProps) {
  const { ref, handleMouseMove, handleMouseLeave, handleMouseEnter } =
    useTilt(8);
  const Icon = getIcon(course.icon);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      <Card
        ref={ref as React.RefObject<HTMLDivElement>}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        sx={{
          background: "linear-gradient(145deg, #111111 0%, #1a1a1a 100%)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: "20px",
          overflow: "hidden",
          transition: "box-shadow 0.4s ease",
          "&:hover": {
            boxShadow: `0 20px 60px ${course.color}20`,
            borderColor: `${course.color}40`,
          },
        }}
      >
        <CardContent sx={{ p: 3 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              mb: 2,
            }}
          >
            <Box
              sx={{
                width: 52,
                height: 52,
                borderRadius: "14px",
                background: `${course.color}15`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: course.color,
                fontSize: "1.5rem",
              }}
            >
              <Icon />
            </Box>
            <Chip
              label={course.level}
              size="small"
              sx={{
                background: `${course.color}15`,
                color: course.color,
                fontWeight: 600,
                fontSize: "0.75rem",
              }}
            />
          </Box>

          <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
            {course.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", mb: 2, minHeight: 40 }}
          >
            {course.shortDescription}
          </Typography>

          {/* <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                color: "text.secondary",
              }}
            >
              <FaClock size={14} />
              <Typography variant="caption">{course.duration}</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                color: "text.secondary",
              }}
            >
              <FaUsers size={14} />
              <Typography variant="caption">
                {course.students.toLocaleString()}
              </Typography>
            </Box>
          </Stack> */}

          {/* <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box>
              <Rating value={course.rating} readOnly precision={0.1} size="small" sx={{ color: '#FFD700' }} />
              <Typography variant="caption" sx={{ color: 'text.secondary', ml: 1 }}>
                {course.rating}
              </Typography>
            </Box>
            <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 700 }}>
              {course.price}
            </Typography>
          </Box> */}

          <Button
            component={Link}
            to={course.slug.startsWith("/courses") ? course.slug : "/study"}
            endIcon={<FaArrowRight />}
            fullWidth
            sx={{
              mt: 2,
              color: course.color,
              borderColor: `${course.color}40`,
              borderRadius: "14px",
              py: 1.2,
              "&:hover": {
                background: `${course.color}10`,
                borderColor: course.color,
              },
            }}
            variant="outlined"
          >
            Read More
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
