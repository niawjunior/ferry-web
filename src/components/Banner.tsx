"use client"
import { Box, Typography, Button, Container } from "@mui/material"
import { isFacebookLink, isMobileDevice } from "../services"
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
        backgroundImage: `url(${image?.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Optional overlay for contrast
          backdropFilter: "blur(2px)",
        }}
      ></Box>

      <Box sx={{ zIndex: 1 }}>
        <Container maxWidth="md">
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
          <Typography variant="h6" sx={{ mb: 4 }}>
            {description}
          </Typography>
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
        </Container>
      </Box>
    </Box>
  )
}

export default Banner
