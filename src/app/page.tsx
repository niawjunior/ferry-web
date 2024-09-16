"use client";
import { Box, Grid2 } from "@mui/material";
import Banner from "~/components/Banner";
import PricingCard from "~/components/cards/PricingCard";

export default function Home() {
  return (
    <Box>
      <Banner />
      <Grid2 container spacing={2} justifyContent="center">
        <Grid2 size={3}>
          <PricingCard
            title="Premium"
            price="$29.99"
            features={["Feature 1", "Feature 2", "Feature 3"]}
            buttonText="Book Now"
            onButtonClick={() => {}}
            isTopPick={true}
          />
        </Grid2>
        <Grid2 size={3}>
          <PricingCard
            title="Premium"
            price="$29.99"
            features={["Feature 1", "Feature 2", "Feature 3"]}
            buttonText="Book Now"
            onButtonClick={() => {}}
          />
        </Grid2>
      </Grid2>
    </Box>
  );
}
