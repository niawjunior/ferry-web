import gql from "graphql-tag";
import { fetchGraphQL } from "./fetch";

const query = gql`
  query {
    promotionPeriodCollection(preview: false) {
      items {
        sys {
          id
        }
        title
        endTime
      }
    }
  }
`;

export interface PromotionPeriod {
  sys: {
    id: string;
  };
  title: string;
  endTime: string;
}

export const getPromotionPeriodList = async (): Promise<PromotionPeriod[]> => {
  const promotionPeriod = await fetchGraphQL(query, { isCache: false });

  return promotionPeriod.data.promotionPeriodCollection.items;
};
