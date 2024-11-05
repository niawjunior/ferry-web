"use client";

import { ArrowRight } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Article } from "~/server/libs/graphql/article.graphql";
import ArticleCard from "./cards/ArticleCard";

interface ArticleSwiperProps {
  articles: Article[];
}

const ArticleSwiper = ({ articles }: ArticleSwiperProps) => {
  return (
    <Stack
      sx={{
        py: 4,
        px: 2,
        gap: 2,
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        บทความ
      </Typography>
      <Link href="/articles">
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
          color="primary"
        >
          บทความทั้งหมด <ArrowRight />
        </Typography>
      </Link>
      <Box
        sx={{
          height: {
            xs: 350,
            md: 500,
          },
        }}
      >
        <Swiper
          style={{ width: "100%", height: "100%" }}
          slidesPerView={4}
          spaceBetween={15}
          breakpoints={{
            320: {
              slidesPerView: 1.5,
            },
            900: {
              slidesPerView: 2.5,
            },
            1200: {
              slidesPerView: 3.5,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          {articles.map((article) => {
            return (
              <SwiperSlide key={article.sys.id}>
                <ArticleCard article={article} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
    </Stack>
  );
};

export default ArticleSwiper;
