import { Box, Typography, Button } from "@mui/material";
import boatBanner from "../../public/boat-banner.webp";
interface BannerProps {
  title: string;
  description: string;
}

const Banner = ({ title, description }: BannerProps) => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: `url(${boatBanner.src})`,
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
        }}
      ></Box>

      <Box sx={{ zIndex: 1 }}>
        <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
          {title}
        </Typography>
        <Typography variant="h6" sx={{ mb: 4 }}>
          {description}
        </Typography>
        <Button
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
          Book Now
        </Button>
      </Box>
    </Box>
  );
};

export default Banner;
