"use client";

import { Container, Grid2, Typography } from "@mui/material";
import PricingCard from "~/components/cards/PricingCard";
import PromotionCard from "~/components/cards/PromotionCard";
import { Promotion } from "~/server/libs/graphql/promotion.graphql";

interface HomePageClientProps {
  promotions: Promotion[];
}

export default function HomePageClient({ promotions }: HomePageClientProps) {
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
                  buttonText="จองเลย"
                />
              </Grid2>
            );
          })}
        </Grid2>
      </Container>
      <PromotionCard
        backgroundImage="/highlight.jpg"
        paperBgColor="#B56576"
        buttonColor="white"
        buttonText="จองปิกนิกป๊อปอัพตอนนี้!"
        onButtonClick={() => {}}
      >
        <Typography variant="h5" component="h2" gutterBottom>
          ปิกนิกหรูหราแบบป๊อปอัพพร้อมให้บริการแล้ว!
        </Typography>
        <Typography variant="body1">
          ลองสัมผัสประสบการณ์ปิกนิกหรูหราแบบป๊อปอัพ
          ที่จะทำให้คุณประทับใจไม่รู้ลืม!
          มาร่วมสร้างช่วงเวลาที่โรแมนติกหรือเฉลิมฉลองโอกาสพิเศษไปกับเราขณะล่องเรือชมทิวทัศน์ของเมืองในเรือที่ตกแต่งอย่างสวยงาม
        </Typography>
        <Typography variant="body1">
          การล่องเรือปิกนิกหรูของคุณประกอบไปด้วยเรือที่ขับเองได้
          ซึ่งตกแต่งอย่างเต็มที่ด้วยพรม หมอน ผ้าห่ม ถังน้ำแข็งพร้อมน้ำแข็ง
          แก้วแชมเปญ ผ้าเช็ดปาก และระบบเสียง Bluetooth นอกจากนี้
          คุณยังได้รับช่อดอกไม้สดกลับบ้านอีกด้วย!
        </Typography>
      </PromotionCard>
    </>
  );
}
