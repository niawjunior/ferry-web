import { Stack } from "@mui/material";
import HomePageClient from "./page.client";
import Banner from "~/components/Banner";
import HowItWorks from "~/components/HowItWorks";
import {
  getBannerList,
  getGalleryList,
  getHighlightList,
} from "~/server/libs/graphql";
import { getPromotionList } from "~/server/libs/graphql/promotion.graphql";
import Gallery from "~/components/Gallery";
import ArticleSwiper from "~/components/ArticleSwiper";
import { getArticleList } from "~/server/libs/graphql/article.graphql";
import { getPromotionPeriodList } from "~/server/libs/graphql/promotion-period.graphql";

export default async function Home() {
  const banners = await getBannerList();
  const gallery = await getGalleryList();
  const banner = banners?.[0];
  const promotions = await getPromotionList();
  const highlights = await getHighlightList();
  const highlight = highlights?.[0];
  const flatGallery = gallery
    .map((items) => {
      return items.imageCollection.items.map((item) => {
        return {
          ...item,
          author: items.author,
        };
      });
    })
    .flat();
  const articles = await getArticleList(4);
  const promotionPeriods = await getPromotionPeriodList();
  const promotionPeriod = promotionPeriods?.[0];

  return (
    <Stack>
      <Banner
        title={banner.title}
        description={banner.description}
        image={banner.image}
        path={banner.path}
        facebookId={banner.facebookId}
      />
      <HomePageClient
        promotions={promotions}
        promotionPeriod={promotionPeriod}
        highlight={highlight}
      />
      <HowItWorks />
      <ArticleSwiper articles={articles} />
      <Gallery images={flatGallery} />
    </Stack>
  );
}
