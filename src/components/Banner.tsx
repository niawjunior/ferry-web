import { Box, Typography, Button } from "@mui/material"

const Banner = () => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage:
          "url('https://lirp.cdn-website.com/59e0eabe/dms3rep/multi/opt/ON+A+BOAT_BoatHireMelbourne-9-1920w.jpg')", // Replace with your image path
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
          You&apos;re The Captain Now
        </Typography>
        <Typography variant="h6" sx={{ mb: 4 }}>
          Captain your own boat on the Yarra River you magnificent beast!
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
  )
}

export default Banner
