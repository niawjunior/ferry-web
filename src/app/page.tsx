import { Stack } from "@mui/material";
import HomePageClient from "./page.client";
import Banner from "~/components/Banner";
import HowItWorks from "~/components/HowItWorks";
import { getBannerList } from "~/server/libs/graphql";

export default async function Home() {
  const banners = await getBannerList();
  const banner = banners?.[0];

  return (
    <Stack>
      <Banner title={banner.title} description={banner.description} />
      <HowItWorks />
      <HomePageClient />
    </Stack>
  );
}
