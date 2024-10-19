"use client"
import { Box, IconButton, Typography } from "@mui/material"
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"
import ImageListItemBar from "@mui/material/ImageListItemBar"
import InfoIcon from "@mui/icons-material/Info"

import Image from "next/image"

interface GalleryProps {
  images: {
    url: string
    title: string
    author: string
  }[]
}
const Gallery = ({ images }: GalleryProps) => {
  return (
    <Box sx={{ py: 8 }}>
      <Typography variant="h4" align="center" gutterBottom>
        ภาพบรรยากาศ สุดแสนวิเศษ
      </Typography>

      <ImageList variant="masonry" cols={3} gap={8}>
        {images.map((item, index) => (
          <ImageListItem key={index}>
            <Image
              src={item.url}
              alt={item.title}
              width={248}
              height={300}
              layout="responsive"
              objectFit="cover"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={"โดย " + item.author}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.title}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  )
}

export default Gallery
