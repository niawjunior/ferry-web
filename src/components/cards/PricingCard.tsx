import React from "react"
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  CardActions,
  Box,
  Stack,
  colors,
} from "@mui/material"
import { isFacebookLink, isMobileDevice } from "~/services"

type PricingCardProps = {
  title: string
  originalPrice: string
  price: string
  features: string[]
  buttonText: string
  path: string
  backgroundUrl: string
  isTopPick?: boolean
  facebookId?: string
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  originalPrice,
  price,
  features,
  buttonText,
  path,
  backgroundUrl,
  isTopPick = false,
  facebookId,
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
    <Card
      sx={{
        width: "100%",
        margin: "auto",
        position: "relative",
        height: "100%",
        backgroundImage: `url(${backgroundUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        sx={{
          background: "rgba(0,0,0,0.5)",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {isTopPick && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              zIndex: 0,
              backgroundColor: "secondary.main",
              color: "white",
              padding: "0.5rem",
            }}
          >
            <Typography variant="caption">แนะนำ</Typography>
          </Box>
        )}
        <CardContent sx={{ zIndex: 1, position: "relative" }}>
          <Typography
            component="h2"
            gutterBottom
            textAlign="center"
            color="white"
            sx={{ fontSize: "1.5rem", fontWeight: "bold" }}
          >
            {title}
          </Typography>
          <Stack sx={{ alignItems: "center" }}>
            {originalPrice && (
              <Typography
                sx={{
                  color: colors.grey[400],
                  textDecoration: "line-through",
                }}
              >
                {originalPrice}
              </Typography>
            )}
            <Typography
              sx={{ fontSize: "2rem", color: "primary.main", lineHeight: 1 }}
            >
              {price}
            </Typography>
          </Stack>
          <List dense>
            {features.map((feature, index) => (
              <ListItem key={index}>
                <ListItemText
                  sx={{ color: colors.grey[100] }}
                  primary={feature}
                />
              </ListItem>
            ))}
          </List>
        </CardContent>
        <CardActions sx={{ mt: "auto" }}>
          <Button
            onClick={() => getFBLink(path || "", facebookId)}
            variant="contained"
            color="primary"
            fullWidth
          >
            {buttonText}
          </Button>
        </CardActions>
      </Box>
    </Card>
  )
}

export default PricingCard
