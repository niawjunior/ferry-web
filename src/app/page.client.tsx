"use client";

import { Container, Grid2, Typography } from "@mui/material";
import PricingCard from "~/components/cards/PricingCard";
import PromotionCard from "~/components/cards/PromotionCard";

export default function HomePageClient() {
  return (
    <>
      <Container sx={{ py: 2 }}>
        <Grid2 container spacing={2} justifyContent="center">
          <Grid2
            size={{
              xs: 12,
              sm: 6,
              md: 4,
            }}
          >
            <PricingCard
              title="Premium"
              price="$29.99"
              features={["Feature 1", "Feature 2", "Feature 4"]}
              buttonText="Book Now"
              onButtonClick={() => {}}
              isTopPick={true}
            />
          </Grid2>
          <Grid2
            size={{
              xs: 12,
              sm: 6,
              md: 4,
            }}
          >
            <PricingCard
              title="Premium"
              price="$29.99"
              features={["Feature 1", "Feature 2", "Feature 3"]}
              buttonText="Book Now"
              onButtonClick={() => {}}
            />
          </Grid2>
        </Grid2>
      </Container>
      <PromotionCard
        backgroundImage="/highlight.webp"
        paperBgColor="#B56576"
        buttonColor="white"
        buttonText="BOOK POP-UP PICNIC NOW"
        onButtonClick={() => {}}
      >
        <Typography variant="h5" component="h2" gutterBottom>
          LUXURY POP-UP PICNICS AVAILABLE!
        </Typography>
        <Typography variant="body1">
          Try our luxury pop-up picnic for the experience of a lifetime! Join us
          for a romantic date or a special occasion as you take in the city
          sights in a decked-out boat.
        </Typography>
        <Typography variant="body1">
          Your luxury pop-up picnic cruise includes a skipper-yourself boat
          that`s fully styled with rugs, cushions, throws, an ice bucket with
          ice, flutes, napkins, and a Bluetooth music system. Plus, you get to
          keep the fresh flowers!
        </Typography>
      </PromotionCard>
    </>
  );
}
