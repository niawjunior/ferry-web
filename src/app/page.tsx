import { Stack } from "@mui/material";
import HomePageClient from "./page.client";
import Banner from "~/components/Banner";
import HowItWorks from "~/components/HowItWorks";
import { getBannerList, getHighlightList } from "~/server/libs/graphql";
import { getPromotionList } from "~/server/libs/graphql/promotion.graphql";

export default async function Home() {
  const banners = await getBannerList();
  const banner = banners?.[0];
  const promotions = await getPromotionList();
  const highlights = await getHighlightList();
  const highlight = highlights?.[0];

  return (
    <Stack>
      <Banner
        title={banner.title}
        description={banner.description}
        image={banner.image}
        path={banner.path}
      />
      <HowItWorks />
      <HomePageClient promotions={promotions} highlight={highlight} />
    </Stack>
  );
}
