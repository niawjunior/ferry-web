import React from "react"
import { Paper, Button, SxProps, Theme, Grid2, Box } from "@mui/material"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { Autoplay } from "swiper/modules" // Removed Navigation
import { isFacebookLink, isMobileDevice } from "~/services"

interface PromotionCardProps {
  backgroundImages: string[]
  paperBgColor?: string
  buttonColor?: string
  buttonText: string
  path: string
  facebookId?: string
  sx?: SxProps<Theme>
}

const PromotionCard: React.FC<React.PropsWithChildren<PromotionCardProps>> = ({
  backgroundImages,
  paperBgColor = "secondary.main",
  buttonColor = "white",
  buttonText,
  path,
  facebookId,
  sx = {},
  children,
}) => {
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
        height: "500px",

        ...sx,
      }}
    >
      {/* Swiper for multiple background images */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        loop
        style={{ width: "100%", height: "100%" }}
      >
        {backgroundImages.map((image, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Promotion Card Content on top of Swiper */}
      <Box
        sx={{
          position: "absolute",
          bottom: "70px",
          zIndex: 2, // Ensures the content stays on top of the images
          display: "flex",
          justifyContent: "flex-end",
          width: "100%",
          px: 2,
        }}
      >
        <Grid2 container justifyContent="center">
          <Grid2
            size={{ xs: 12, md: 8 }}
            sx={{
              display: "flex",
              width: "100%",
              minWidth: "100%",
              justifyContent: "center",
            }}
          >
            <Paper
              elevation={3}
              sx={{
                width: "100%",
                padding: {
                  xs: 2,
                  md: 3,
                },
                borderRadius: "20px",
                backgroundColor: paperBgColor,
                color: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "center",
                maxWidth: {
                  xs: "100%",
                  md: "500px",
                },
              }}
            >
              {children}
              <Button
                onClick={() => getFBLink(path || "", facebookId)}
                variant="outlined"
                sx={{
                  color: buttonColor,
                  borderColor: buttonColor,
                  mt: 2,
                }}
              >
                {buttonText}
              </Button>
            </Paper>
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  )
}

export default PromotionCard
