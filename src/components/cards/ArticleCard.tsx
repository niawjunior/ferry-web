import { Box, colors, Typography } from "@mui/material";
import Link from "next/link";
import { Article } from "~/server/libs/graphql/article.graphql";

interface ArticleCardProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <Link href={`/articles/${article.sys.id}`}>
      <Box
        sx={{
          minHeight: {
            xs: 350,
            md: 500,
          },
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
  );
};

export default ArticleCard;
