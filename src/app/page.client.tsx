"use client"

import { Container, Grid2, Typography } from "@mui/material"
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
      <Container sx={{ py: 2 }}>
        <Grid2 container spacing={2} justifyContent="center">
          {promotions.map((promotion) => {
            return (
              <Grid2
                key={promotion._id}
                size={{
                  xs: 12,
                  sm: 6,
                  md: 4,
                }}
              >
                <PricingCard
                  title={promotion.title}
                  originalPrice={`${promotion.originalPrice} บาท`}
                  price={`${promotion.price} บาท`}
                  features={promotion.features}
                  path={promotion.path}
                  isTopPick={promotion.isTopPick}
                  backgroundUrl={promotion.background.url}
                  buttonText="จองเลย"
                />
              </Grid2>
            )
          })}
        </Grid2>
      </Container>
      <PromotionCard
        backgroundImage={highlight.background.url}
        paperBgColor="#B56576"
        buttonColor="white"
        buttonText={highlight.actionText}
        path={highlight.path}
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
