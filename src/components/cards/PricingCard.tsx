import React from "react";
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
} from "@mui/material";
import Link from "next/link";

type PricingCardProps = {
  title: string;
  originalPrice: string;
  price: string;
  features: string[];
  buttonText: string;
  path: string;
  isTopPick?: boolean;
};

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  originalPrice,
  price,
  features,
  buttonText,
  path,
  isTopPick = false,
}) => {
  return (
    <Card
      sx={{
        width: "100%",
        margin: "auto",
        position: "relative",
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
          sx={{ fontSize: "1.5rem", fontWeight: "bold" }}
        >
          {title}
        </Typography>
        <Stack sx={{ alignItems: "center" }}>
          {originalPrice && (
            <Typography
              sx={{
                color: "text.secondary",
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
              <ListItemText primary={feature} />
            </ListItem>
          ))}
        </List>
      </CardContent>
      <CardActions sx={{ mt: "auto" }}>
        <Button
          LinkComponent={Link}
          target="_blank"
          href={path}
          variant="contained"
          color="primary"
          fullWidth
        >
          {buttonText}
        </Button>
      </CardActions>
    </Card>
  );
};

export default PricingCard;
