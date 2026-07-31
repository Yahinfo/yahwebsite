import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Rating,
  Container,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import type { Testimonial } from "../../types";

interface TestimonialsProps {
  items: Testimonial[];
}

export default function Testimonials({ items }: TestimonialsProps) {
  return (
    <Box className="section" sx={{ overflow: "hidden" }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Typography variant="h3" sx={{ textAlign: "center", mb: 2 }}>
            What Our{" "}
            <Box component="span" className="gradient-text">
              Students Say
            </Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              color: "text.secondary",
              mb: 6,
              maxWidth: 500,
              mx: "auto",
            }}
          >
            Hear from our alumni who transformed their careers with YahTecInfo
          </Typography>
        </motion.div>

        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={24}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <Card
                sx={{
                  background: "linear-gradient(145deg, #111111, #1a1a1a)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "20px",
                  height: "100%",
                  transition: "all 0.4s ease",
                  "&:hover": {
                    borderColor: "rgba(0,229,255,0.2)",
                    boxShadow: "0 20px 60px rgba(0,229,255,0.1)",
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Rating
                    value={item.rating}
                    readOnly
                    size="small"
                    sx={{ color: "#FFD700", mb: 2 }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      mb: 3,
                      lineHeight: 1.8,
                      fontStyle: "italic",
                    }}
                  >
                    &ldquo;{item.content}&rdquo;
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Avatar
                      sx={{
                        background: "linear-gradient(135deg, #00E5FF, #8B5CF6)",
                        fontWeight: 700,
                        color: "#050505",
                      }}
                    >
                      {item.avatar}
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                        {item.name}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{ color: "text.secondary" }}
                      >
                        {item.role} at {item.company}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
}
