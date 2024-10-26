"use client"
import { Box, Typography, Button, Container } from "@mui/material"
import { isFacebookLink, isMobileDevice } from "../services"
import { motion } from "framer-motion"

interface BannerProps {
  title: string
  description: string
  image: {
    url: string
  }
  path?: string
  facebookId?: string
}

const Banner = ({
  title,
  description,
  image,
  path,
  facebookId,
}: BannerProps) => {
  const getFBLink = (path: string, facebookId?: string) => {
    if (isFacebookLink(path)) {
      const fbAppLink = `fb://profile/${facebookId}`
      if (isMobileDevice()) {
        window.location.href = fbAppLink
      } else {
        window.open(path, "_blank")
      }
    } else {
      window.open(path, "_blank")
    }
  }

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        overflow: "hidden",
        color: "#fff",
        textAlign: "center",
      }}
    >
      {/* Motion Background Box for Zoom Effect */}
      <Box
        component={motion.div}
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${image?.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0, // Make sure the background is behind the text
        }}
      ></Box>

      {/* Animated Overlay for Contrast */}
      <Box
        component={motion.div}
        initial={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
        animate={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        transition={{
          duration: 4,
          ease: "easeOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backdropFilter: "blur(2px)",
          zIndex: 1, // Keep it behind the text but above the background
        }}
      ></Box>

      {/* Content Box with Framer Motion animations */}
      <Box sx={{ zIndex: 2 }}>
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold !important",
                mb: 2,
                typography: { xs: "h4", sm: "h4", md: "h2" },
              }}
            >
              {title}
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.2, ease: "easeOut" }}
          >
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
              {description}
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
          >
            <Button
              onClick={() => getFBLink(path || "", facebookId)}
              size="large"
              variant="contained"
              color="warning" // Use MUI's 'warning' color for the orange look
              sx={{
                backgroundColor: "#ff6600", // Custom orange color
                textTransform: "none",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "2rem",
                padding: "5px 40px",
                "&:hover": {
                  backgroundColor: "#e65c00",
                },
              }}
            >
              จองเลย
            </Button>
          </motion.div>
        </Container>
      </Box>
    </Box>
  )
}

export default Banner
