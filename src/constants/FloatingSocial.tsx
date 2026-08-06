import { Box, IconButton, Tooltip } from "@mui/material";
import type { IconType } from "react-icons";
import {
  FaFacebook,
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { MdCampaign } from "react-icons/md";

import { COMPANY } from "./nav";

type SocialItem = {
  icon: IconType;
  url: string;
  label: string;
};

const SOCIAL: SocialItem[] = [
  {
    icon: FaFacebook,
    url: COMPANY.social.facebook,
    label: "Facebook",
  },
  {
    icon: MdCampaign,
    url: COMPANY.social.whatsappChannel,
    label: "WhatsApp Channel",
  },
  {
    icon: FaWhatsapp,
    url: COMPANY.social.whatsapp,
    label: "WhatsApp",
  },
  {
    icon: FaLinkedin,
    url: COMPANY.social.linkedin,
    label: "LinkedIn",
  },
  {
    icon: FaInstagram,
    url: COMPANY.social.instagram,
    label: "Instagram",
  },
  {
    icon: FaYoutube,
    url: COMPANY.social.youtube,
    label: "YouTube",
  },
];

const FloatingSocial = () => {
  return (
    <Box
      component="aside"
      sx={{
        position: "fixed",
        top: "30%",
        right: 20,
        transform: "translateY(-50%)",
        zIndex: 9999,

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1.5,

        p: 1,
        borderRadius: "50px",

        background:
          "linear-gradient(145deg, rgba(42,28,15,0.95), rgba(18,18,18,0.95))",

        border: "2px solid transparent",
        backgroundImage: `
    linear-gradient(rgba(42,28,15,0.95), rgba(18,18,18,0.95)),
    linear-gradient(135deg, #FFD700, #D4AF37, #8B5E3C, #FFD700)
  `,
        backgroundOrigin: "border-box",
        backgroundClip: "padding-box, border-box",

        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",

        boxShadow: `
    0 0 15px rgba(255,215,0,0.35),
    0 10px 35px rgba(0,0,0,0.45)
  `,

        "@media (max-width:600px)": {
          right: 10,
          gap: 1,
          p: 0.75,
        },
      }}
    >
      {SOCIAL.map(({ icon: Icon, url, label }, index) => (
        <Tooltip key={label} title={label} placement="left" arrow>
          <IconButton
            component="a"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            sx={{
              width: { xs: 42, sm: 50 },
              height: { xs: 42, sm: 50 },

              color: "#fff",
              bgcolor: "rgba(255,255,255,.08)",

              transition: "all .35s ease",

              animation: `float 3s ease-in-out ${index * 0.2}s infinite`,

              "&:hover": {
                bgcolor: "primary.main",
                transform: "translateX(-10px) scale(1.15)",
                boxShadow: "0 0 20px rgba(25,118,210,.6)",
              },

              "@keyframes float": {
                "0%": {
                  transform: "translateY(0px)",
                },
                "50%": {
                  transform: "translateY(-6px)",
                },
                "100%": {
                  transform: "translateY(0px)",
                },
              },
            }}
          >
            <Icon size={22} />
          </IconButton>
        </Tooltip>
      ))}
    </Box>
  );
};

export default FloatingSocial;
