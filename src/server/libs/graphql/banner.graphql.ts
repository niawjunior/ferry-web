import gql from "graphql-tag";
import { fetchGraphQL } from "./fetch";

export const query = gql`
  query {
    bannerCollection(preview: false) {
      items {
        title
        description
      }
    }
  }
`;

export interface Banner {
  title: string;
  description: string;
}

export const getBannerList = async (): Promise<Banner[]> => {
  const bannerCollection = await fetchGraphQL(query);

  return bannerCollection.data.bannerCollection.items;
};
