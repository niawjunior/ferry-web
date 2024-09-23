import { Container, Typography, Box, Grid2 } from "@mui/material"
import Image from "next/image" // for using optimized Next.js images
import boatImage from "../../../public/boat-banner.webp" // add the appropriate image path

const AboutPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4, mt: 10 }}>
      {/* Header section */}
      <Grid2
        container
        justifyContent="center"
        alignItems="center"
        sx={{ mb: 6 }}
      >
        <Grid2 size={{ xs: 12, md: 8 }}>
          <Box sx={{ position: "relative", height: 400 }}>
            <Image
              src={boatImage.src} // boat image you uploaded
              alt="Boat image"
              layout="fill"
              objectFit="cover"
              style={{ borderRadius: "8px" }}
            />
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 8 }}>
          <Typography
            variant="h2"
            component="h1"
            align="center"
            sx={{ fontWeight: 700, mt: 4, color: "primary.main" }}
          >
            About Our Boat Service
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{ fontSize: "1.25rem", mt: 2, color: "text.secondary" }}
          >
            {`Our platform offers an easy and eco-friendly way to book boats for
            dining, traveling, and exploring beautiful rivers. Whether it's a
            romantic dinner or a family adventure, our boats provide a safe and
            enjoyable experience for everyone.`}
          </Typography>
        </Grid2>
      </Grid2>

      {/* Mission/Information Section */}
      <Grid2 container spacing={4} justifyContent="center">
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Typography variant="h4" gutterBottom>
            Our Mission
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "1rem", lineHeight: 1.6 }}
          >
            We believe in making the water accessible for everyone, providing an
            eco-friendly and easy-to-drive boating experience. Our boats are
            designed to allow you to explore the river while enjoying dining and
            leisure activities.
          </Typography>
        </Grid2>

        <Grid2 size={{ xs: 12, md: 6 }}>
          <Typography variant="h4" gutterBottom>
            Why Choose Us?
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "1rem", lineHeight: 1.6 }}
          >
            Our boats offer unique, family-friendly adventures, perfect for
            dining on the water or exploring the beauty of the rivers. With
            sustainable electric motors, you can cruise in comfort, without
            worrying about the environmental impact.
          </Typography>
        </Grid2>
      </Grid2>
    </Container>
  )
}

export default AboutPage
