import React from "react";
import {
  Paper,
  Button,
  SxProps,
  Theme,
  Grid2,
  Container,
  Box,
} from "@mui/material";

interface PromotionCardProps {
  backgroundImage: string;
  paperBgColor?: string;
  buttonColor?: string;
  buttonText: string;
  onButtonClick: () => void;
  sx?: SxProps<Theme>;
}

const PromotionCard: React.FC<React.PropsWithChildren<PromotionCardProps>> = ({
  backgroundImage,
  paperBgColor = "secondary.main",
  buttonColor = "white",
  buttonText,
  onButtonClick,
  sx = {},
  children,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "transparent",
        justifyContent: { xs: "center", md: "space-between" },
        minHeight: 600,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        ...sx,
      }}
    >
      <Container>
        <Grid2 container>
          <Grid2 size={{ xs: 12, md: 6 }} />
          <Grid2
            size={{ xs: 12, md: 6 }}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Paper
              elevation={3}
              sx={{
                width: "100%",
                padding: 3,
                borderRadius: "20px",
                backgroundColor: paperBgColor,
                color: "white",
              }}
            >
              {children}
              <Button
                variant="outlined"
                sx={{
                  color: buttonColor,
                  borderColor: buttonColor,
                  mt: 2,
                }}
                onClick={onButtonClick}
              >
                {buttonText}
              </Button>
            </Paper>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default PromotionCard;
