import { useState } from "react";
import a from "../../assets/a.jpeg";
import b from "../../assets/b.jpeg";
import javaoda from "../../assets/javaoda.png";
import {
  Box,
  Card,
  CardMedia,
  Container,
  Grid,
  Typography,
  Dialog,
  IconButton,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";

import AnimatedBackground from "../../components/AnimatedBackground/AnimatedBackground";

const galleryData = [
  {
    id: 1,
    title: "Training Session",
    images: [a, b, javaoda],
  },
];

// Parent Animation
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Card Animation
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleOpen = (img: any) => {
    setSelectedImage(img);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage("");
  };

  return (
    <Box sx={{ position: "relative", minHeight: "100vh" }}>
      <AnimatedBackground variant="aurora" />

      <Container
        maxWidth="lg"
        sx={{
          py: 8,
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Page Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {galleryData.map((section) => (
            <Box key={section.id} sx={{ mb: 8 }}>
              <Typography
                variant="h3"
                align="center"
                fontWeight="bold"
                mb={6}
                color="white"
              >
                {section.title}
              </Typography>

              <Grid
                container
                spacing={3}
                component={motion.div}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {section.images.map((img, index) => (
                  <Grid
                    key={index}
                    size={{
                      xs: 12,
                      sm: 6,
                      md: 4,
                    }}
                  >
                    <motion.div
                      variants={cardVariants}
                      whileHover={{
                        scale: 1.03,
                        y: -8,
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Card
                        onClick={() => handleOpen(img)}
                        sx={{
                          borderRadius: 4,
                          overflow: "hidden",
                          cursor: "pointer",
                          bgcolor: "transparent",
                          boxShadow: "0 12px 35px rgba(0,0,0,0.35)",
                        }}
                      >
                        <CardMedia
                          component="img"
                          image={img}
                          alt={`Gallery ${index + 1}`}
                          sx={{
                            width: "100%",
                            height: 280,
                            objectFit: "cover",
                            transition: "0.5s",
                            "&:hover": {
                              transform: "scale(1.08)",
                            },
                          }}
                        />
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))}
        </motion.div>
      </Container>

      {/* Full Screen Image */}
      <AnimatePresence>
        {open && (
          <Dialog
            open={open}
            onClose={handleClose}
            maxWidth={false}
            fullScreen
            PaperProps={{
              sx: {
                bgcolor: "rgba(0,0,0,0.95)",
                overflow: "hidden",
              },
            }}
          >
            {/* Close Button */}
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: 20,
                right: 20,
                zIndex: 1000,
                color: "#fff",
                bgcolor: "rgba(255,255,255,0.15)",
                "&:hover": {
                  bgcolor: "rgba(255,255,255,0.3)",
                },
              }}
            >
              <CloseIcon />
            </IconButton>

            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: 2,
              }}
            >
              <motion.img
                src={selectedImage}
                alt="Preview"
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.8,
                }}
                transition={{
                  duration: 0.4,
                }}
                style={{
                  maxWidth: "95%",
                  maxHeight: "90%",
                  objectFit: "contain",
                  borderRadius: "16px",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
                }}
              />
            </Box>
          </Dialog>
        )}
      </AnimatePresence>
    </Box>
  );
}
