import { Stack } from "@mui/material"
import HomePageClient from "./page.client"
import Banner from "~/components/Banner"
import HowItWorks from "~/components/HowItWorks"
import {
  getBannerList,
  getGalleryList,
  getHighlightList,
} from "~/server/libs/graphql"
import { getPromotionList } from "~/server/libs/graphql/promotion.graphql"
import Gallery from "~/components/Gallery"

export default async function Home() {
  const banners = await getBannerList()
  const gallery = await getGalleryList()
  const banner = banners?.[0]
  const promotions = await getPromotionList()
  const highlights = await getHighlightList()
  const highlight = highlights?.[0]
  const flatGallery = gallery
    .map((items) => {
      return items.imageCollection.items.map((item) => {
        return {
          ...item,
          author: items.author,
        }
      })
    })
    .flat()

  return (
    <Stack>
      <Banner
        title={banner.title}
        description={banner.description}
        image={banner.image}
        path={banner.path}
        facebookId={banner.facebookId}
      />
      <HomePageClient promotions={promotions} highlight={highlight} />
      <HowItWorks />
      <Gallery images={flatGallery} />
    </Stack>
  )
}
