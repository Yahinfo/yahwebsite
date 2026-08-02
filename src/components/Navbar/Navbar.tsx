import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useScrollTrigger,
  alpha,
} from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS } from "../../constants/nav";
import MegaMenu from "../MegaMenu/MegaMenu";
import { COMPANY } from "../../constants/nav";
import Logo from "../../assets/yahtec.png";
export default function Navbar() {
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 50 });
  const location = useLocation();

  useEffect(() => {
    setMegaOpen(false);
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <AppBar
        position="fixed"
        component={motion.div}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        sx={{
          background: scrolled ? "rgba(5, 5, 5, 0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
          transition: "all 0.4s ease",
          boxShadow: scrolled ? "0 4px 30px rgba(0,229,255,0.05)" : "none",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
            <Box
              component={Link}
              to="/"
              sx={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Box
                sx={{
                  width: 80, // 40 -> 56
                  height: 86, // 40 -> 56
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "transparent", // No background
                }}
              >
                <Box
                  component="img"
                  src={Logo}
                  alt="YahTecInfo Logo"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    display: "block",
                    filter: "drop-shadow(0 0 30px rgba(255, 238, 0, 0.34))",
                  }}
                />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: '"Space Grotesk", sans-serif',
                  fontWeight: 1500,
                  letterSpacing: "1px",

                  background:
                    "linear-gradient(90deg,#8B6508,#FFD700,#FFF8DC,#FFD700,#8B6508)",
                  backgroundSize: "300% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",

                  filter: "drop-shadow(0 0 8px rgba(255,215,0,.6))",

                  animation: "goldShine 2.5s linear infinite",

                  "@keyframes goldShine": {
                    "0%": {
                      backgroundPosition: "0% 50%",
                    },
                    "100%": {
                      backgroundPosition: "300% 50%",
                    },
                  },
                }}
              >
                {COMPANY.name}
              </Typography>
            </Box>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 1,
              }}
            >
              {NAV_ITEMS.map((item) => (
                <Box key={item.label} sx={{ position: "relative" }}>
                  {item.hasMegaMenu ? (
                    <Button
                      onMouseEnter={() => setMegaOpen(true)}
                      sx={{
                        color: megaOpen ? "primary.main" : "text.primary",
                        fontWeight: 500,
                        px: 2,
                        "&:hover": {
                          color: "primary.main",
                          background: alpha("#00E5FF", 0.08),
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  ) : (
                    <Button
                      component={Link}
                      to={item.path}
                      sx={{
                        color:
                          location.pathname === item.path
                            ? "primary.main"
                            : "text.primary",
                        fontWeight: 500,
                        px: 2,
                        "&:hover": {
                          color: "primary.main",
                          background: alpha("#00E5FF", 0.08),
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  )}
                </Box>
              ))}
              <Button
                component={Link}
                to="/study"
                variant="contained"
                sx={{
                  ml: 2,
                  background: "linear-gradient(135deg, #00E5FF, #3B82F6)",
                }}
              >
                Start Learning
              </Button>
            </Box>

            <IconButton
              sx={{ display: { md: "none" }, color: "text.primary" }}
              onClick={() => setMobileOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>

        <AnimatePresence>
          {megaOpen && (
            <Box onMouseLeave={() => setMegaOpen(false)}>
              <MegaMenu />
            </Box>
          )}
        </AnimatePresence>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            background: "#111111",
            borderLeft: "1px solid rgba(255,255,255,0.08)",
          },
        }}
      >
        <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
          <IconButton
            onClick={() => setMobileOpen(false)}
            sx={{ color: "text.primary" }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {[
            ...NAV_ITEMS,
            { label: "Study", path: "/study" },
            { label: "Internship", path: "/internship" },
            { label: "Services", path: "/services" },
          ].map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                component={Link}
                to={item.path}
                onClick={() => setMobileOpen(false)}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
