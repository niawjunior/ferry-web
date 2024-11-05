import { Container, Grid2, Stack, Typography } from "@mui/material";
import ArticleCard from "~/components/cards/ArticleCard";
import { getArticleList } from "~/server/libs/graphql/article.graphql";

export default async function Articles() {
  const articleList = await getArticleList();

  return (
    <Container sx={{ pt: { xs: "66px", md: "74px" } }}>
      <Stack sx={{ py: 2 }} gap={2}>
        <Typography variant="h3" textAlign="center">
          บทความทั้งหมด
        </Typography>
        <Grid2 container spacing={2}>
          {articleList.map((article) => {
            return (
              <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={article.sys.id}>
                <ArticleCard article={article} />
              </Grid2>
            );
          })}
        </Grid2>
      </Stack>
    </Container>
  );
}
