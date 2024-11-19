import { Container, Typography, Box, Grid2 } from "@mui/material"
import { getCertificate } from "~/server/libs/graphql/certificate.graphql"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Image from "next/image"
import { BLOCKS, Node } from "@contentful/rich-text-types"

const CertificatesPage = async () => {
  const certificate = await getCertificate()
  const findImageById = (imageId: string) => {
    return certificate.content.links.assets.block.find(
      (image) => image.sys.id === imageId
    )
  }
  const renderOptions = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: Node) => {
        const image = findImageById(node.data.target.sys.id)
        // render the EMBEDDED_ASSET as you need
        return (
          <Image
            src={image!.url}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }} // optional
            alt={image!.title}
          />
        )
      },
    },
  }

  return (
    <Container
      maxWidth="lg"
      sx={{
        pt: {
          xs: "66px",
          md: "74px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        },
      }}
    >
      {/* Header section */}
      <Grid2
        container
        justifyContent="center"
        alignItems="center"
        sx={{ mb: 6 }}
      >
        <Grid2 size={{ xs: 12, md: 8 }}>
          <Typography
            variant="h3"
            component="h3"
            sx={{ fontWeight: 700, mt: 4, color: "primary.main" }}
          >
            {certificate?.title}
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
          {documentToReactComponents(certificate?.content?.json, renderOptions)}
        </Box>
      </Grid2>
    </Container>
  )
}

export default CertificatesPage
