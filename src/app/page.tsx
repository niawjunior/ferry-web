import { Stack } from "@mui/material"
import HomePageClient from "./page.client"
import Banner from "~/components/Banner"
import HowItWorks from "~/components/HowItWorks"
import { getBannerList } from "~/server/libs/graphql"
import { getPromotionList } from "~/server/libs/graphql/promotion.graphql"

export default async function Home() {
  const banners = await getBannerList()
  const banner = banners?.[0]
  const promotions = await getPromotionList()

  return (
    <Stack>
      <Banner
        title={banner.title}
        description={banner.description}
        image={banner.image}
      />
      <HowItWorks />
      <HomePageClient promotions={promotions} />
    </Stack>
  )
}
