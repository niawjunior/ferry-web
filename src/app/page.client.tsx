"use client";

import {
  Box,
  Container,
  Grid2,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import PricingCard from "~/components/cards/PricingCard";
import PromotionCard from "~/components/cards/PromotionCard";
import { Highlight, Promotion } from "~/server/libs/graphql";
import { PromotionPeriod } from "~/server/libs/graphql/promotion-period.graphql";
import { isAfter } from "date-fns";
import dynamic from "next/dynamic";
import { useState } from "react";

const FlipClockCountdown = dynamic(
  () => import("@leenguyen/react-flip-clock-countdown"),
  { ssr: false }
);

interface HomePageClientProps {
  promotions: Promotion[];
  highlight: Highlight;
  promotionPeriod: PromotionPeriod;
}

export default function HomePageClient({
  promotions,
  promotionPeriod,
  highlight,
}: HomePageClientProps) {
  const theme = useTheme();
  const [isShowPromotionPeriod, setShowPromotionPeriod] = useState(
    isAfter(new Date(promotionPeriod.endTime), new Date())
  );

  const handleHidePromotionPeriod = () => {
    setShowPromotionPeriod(false);
  };

  return (
    <>
      <Box sx={{ backgroundColor: "#f2f2f2" }}>
        <Container sx={{ py: 2 }}>
          {isShowPromotionPeriod && (
            <Stack direction="row" gap={2}>
              <Typography color="primary" variant="h3">
                {promotionPeriod.title}
              </Typography>
              <FlipClockCountdown
                labels={["วัน", "ชั่วโมง", "นาที", "วินาที"]}
                digitBlockStyle={{
                  background: theme.palette.secondary.main,
                  fontSize: "2rem",
                  width: "2.5rem",
                  height: "3rem",
                }}
                to={promotionPeriod.endTime}
                onComplete={handleHidePromotionPeriod}
              />
            </Stack>
          )}
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
                    originalPrice={
                      !!promotion.originalPrice
                        ? `${promotion.originalPrice.toLocaleString(
                            "en-US"
                          )} บาท`
                        : undefined
                    }
                    price={`${promotion.price.toLocaleString("en-US")} บาท`}
                    features={promotion.features}
                    path={promotion.path}
                    facebookId={promotion.facebookId}
                    isTopPick={promotion.isTopPick}
                    backgroundUrl={promotion.background.url}
                    buttonText="จองเลย"
                  />
                </Grid2>
              );
            })}
          </Grid2>
        </Container>
      </Box>
      <PromotionCard
        backgroundImages={highlight.backgroundCollection.items.map((item) => {
          return item.url;
        })}
        paperBgColor="secondary.main"
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
  );
}
