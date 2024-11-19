import { Container, Typography, Box, Grid2 } from "@mui/material"
import Image from "next/image" // for using optimized Next.js images
import { getAbout } from "~/server/libs/graphql/about.graphql"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const AboutPage = async () => {
  const about = await getAbout()
  return (
    <Container maxWidth="lg" sx={{ py: 4, mt: 10 }}>
      {/* Header section */}
      <Grid2
        container
        justifyContent="center"
        alignItems="center"
        sx={{ mb: 6 }}
      >
        <Grid2 size={{ xs: 12, md: 12 }}>
          <Box sx={{ position: "relative", height: 300 }}>
            <Image
              src={about.image.url}
              alt="Boat image"
              layout="fill"
              objectFit="cover"
              style={{ borderRadius: "8px" }}
            />
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 8 }}>
          <Typography
            variant="h3"
            component="h3"
            align="center"
            sx={{ fontWeight: 700, mt: 4, color: "primary.main" }}
          >
            {about?.title}
          </Typography>
        </Grid2>
      </Grid2>

      <Grid2 container>
        <Box
          sx={{
            "& > p": {
              mb: 6, // Space below each <p> tag
              fontSize: "1.25em",
              color: "text.secondary",
            },
            "& > h4": {
              fontSize: "1.6em",
            },
          }}
        >
          {documentToReactComponents(about?.content?.json)}
        </Box>
      </Grid2>
    </Container>
  )
}

export default AboutPage
