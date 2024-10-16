import { Box, Typography } from "@mui/material"
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"
import Image from "next/image"

interface GalleryProps {
  images: {
    url: string
    title: string
  }[]
}
const Gallery = ({ images }: GalleryProps) => {
  return (
    <Box sx={{ py: 8 }}>
      <Typography variant="h4" align="center" gutterBottom>
        ภาพบรรยากาศ สุดแสนวิเศษ
      </Typography>

      <ImageList variant="masonry" cols={3} gap={8}>
        {images.map((item) => (
          <ImageListItem key={item.url}>
            <Image
              src={item.url}
              alt={item.title}
              width={248}
              height={248}
              layout="responsive"
              objectFit="cover"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  )
}

export default Gallery
