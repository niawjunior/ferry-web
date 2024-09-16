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
} from "@mui/material";

type PricingCardProps = {
  title: string;
  price: string;
  features: string[];
  buttonText: string;
  isTopPick?: boolean;
  onButtonClick: () => void;
};

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  features,
  buttonText,
  onButtonClick,
  isTopPick = false,
}) => {
  return (
    <Card sx={{ width: "100%", margin: "auto", position: "relative" }}>
      {isTopPick && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            backgroundColor: "secondary.main",
            color: "white",
            padding: "0.5rem 1rem",
            borderRadius: "0 0 4px 0",
          }}
        >
          Top Pick
        </Box>
      )}
      <CardContent>
        <Typography
          component="h2"
          gutterBottom
          sx={{ fontSize: "1.5rem", fontWeight: "bold" }}
        >
          {title}
        </Typography>
        <Typography
          component="p"
          sx={{ fontSize: "2rem", color: "primary.main" }}
        >
          {price}
        </Typography>
        <List sx={{ margin: 1 }}>
          {features.map((feature, index) => (
            <ListItem key={index}>
              <ListItemText primary={feature} />
            </ListItem>
          ))}
        </List>
      </CardContent>
      <CardActions>
        <Button
          sx={{ marginBottom: 2 }}
          variant="contained"
          color="primary"
          fullWidth
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </CardActions>
    </Card>
  );
};

export default PricingCard;
