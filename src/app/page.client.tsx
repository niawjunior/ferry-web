"use client"

import { Box, Container, Grid2, Typography } from "@mui/material"
import PricingCard from "~/components/cards/PricingCard"
import PromotionCard from "~/components/cards/PromotionCard"
import { Highlight, Promotion } from "~/server/libs/graphql"

interface HomePageClientProps {
  promotions: Promotion[]
  highlight: Highlight
}

export default function HomePageClient({
  promotions,
  highlight,
}: HomePageClientProps) {
  return (
    <>
      <Box sx={{ backgroundColor: "#f2f2f2" }}>
        <Container sx={{ py: 2 }}>
          <Grid2 container spacing={2} justifyContent="center">
            {promotions.map((promotion, index) => {
              return (
                <Grid2
                  key={index}
                  size={{
                    xs: 12,
                    sm: 6,
                    md: 4,
                  }}
                >
                  <PricingCard
                    title={promotion.title}
                    originalPrice={`${promotion.originalPrice.toLocaleString(
                      "en-US"
                    )} บาท`}
                    price={`${promotion.price.toLocaleString("en-US")} บาท`}
                    features={promotion.features}
                    path={promotion.path}
                    facebookId={promotion.facebookId}
                    isTopPick={promotion.isTopPick}
                    backgroundUrl={promotion.background.url}
                    buttonText="จองเลย"
                  />
                </Grid2>
              )
            })}
          </Grid2>
        </Container>
      </Box>
      <PromotionCard
        backgroundImage={highlight.background.url}
        paperBgColor="#B56576"
        buttonColor="white"
        buttonText={highlight.actionText}
        path={highlight.path}
        facebookId={highlight.facebookId}
      >
        <Typography variant="h5" component="h2" gutterBottom>
          {highlight.title}
        </Typography>
        <Typography variant="body1">{highlight.description1}</Typography>
        <Typography variant="body1">{highlight.description2}</Typography>
      </PromotionCard>
    </>
  )
}
