"use client";

import { ArrowRight } from "@mui/icons-material";
import { Box, colors, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Article } from "~/server/libs/graphql/article.graphql";

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
                <Link href={`/articles/${article.sys.id}`}>
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      backgroundImage: `url(${article.coverImage.url})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <Box
                      sx={{
                        background: "rgba(0,0,0,0.5)",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        p: 2,
                      }}
                    >
                      <Typography textAlign="center" variant="h6" color="white">
                        {article.title}
                      </Typography>
                      <Typography
                        color={colors.grey[300]}
                        sx={{
                          WebkitLineClamp: 5,
                          WebkitBoxOrient: "vertical",
                          display: "-webkit-box",
                          overflow: "hidden",
                        }}
                      >
                        {article.shortDescription}
                      </Typography>
                    </Box>
                  </Box>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
    </Stack>
  );
};

export default ArticleSwiper;
