import { Box, Grid2, Typography } from "@mui/material"
import { Anchor, MessageSquare, Smile } from "lucide-react"

const HowItWorks = () => {
  const steps = [
    {
      icon: <MessageSquare size={48} />,
      title: "Book Online",
      description:
        "Choose your preferred cruise type and book easily through our website. Same-day bookings often available!",
    },
    {
      icon: <Anchor size={48} />,
      title: "Arrive at the Dock",
      description:
        "Meet your crew at the designated dock 15 minutes before departure. Don't forget to bring refreshments or pre-order our catering package.",
    },
    {
      icon: <Smile size={48} />,
      title: "Enjoy Your Cruise",
      description:
        "Set sail on the Yarra River and enjoy a fantastic time with your friends. Our boats are designed for maximum enjoyment!",
    },
  ]

  return (
    <Box sx={{ py: 8, px: 2 }}>
      <Typography variant="h4" align="center" gutterBottom>
        How It Works
      </Typography>
      <Grid2 container spacing={4} justifyContent="center">
        {steps.map((step, index) => (
          <Grid2
            size={{
              xs: 12,
              md: 6,
              lg: 4,
            }}
            key={index}
          >
            <Box
              sx={{
                p: 3,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Box
                sx={{
                  mb: 2,
                  color: "primary.main",
                  border: "1px solid",
                  borderRadius: "50%",
                  width: 100,
                  height: 100,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {step.icon}
              </Box>
              <Typography variant="h5" component="h3" gutterBottom>
                {step.title}
              </Typography>
              <Typography variant="body1">{step.description}</Typography>
            </Box>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  )
}

export default HowItWorks
