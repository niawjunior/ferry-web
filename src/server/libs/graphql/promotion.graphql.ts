import gql from "graphql-tag";
import { fetchGraphQL } from "./fetch";

const query = gql`
  query {
    promotionCollection(preview: false, order: order_ASC) {
      items {
        _id
        title
        originalPrice
        price
        features
        isTopPick
        path
        background {
          url
        }
      }
    }
  }
`;

export interface Promotion {
  _id: string;
  title: string;
  originalPrice: number;
  price: number;
  features: string[];
  isTopPick: boolean;
  path: string;
  background: {
    url: string;
  };
}

export const getPromotionList = async (): Promise<Promotion[]> => {
  const promotionCollection = await fetchGraphQL(query);

  return promotionCollection.data.promotionCollection.items ?? [];
};
