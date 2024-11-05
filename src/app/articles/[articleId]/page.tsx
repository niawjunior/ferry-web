import { Params } from "next/dist/shared/lib/router/utils/route-matcher"
import { getArticleById } from "~/server/libs/graphql/article.graphql"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Image from "next/image"
import { Typography, Box, Container } from "@mui/material"

interface ArticleProps {
  params: Params & {
    articleId: string
  }
}

export default async function Article({ params: { articleId } }: ArticleProps) {
  const article = await getArticleById(articleId)
  if (!article) {
    return <Typography variant="h6">Article not found</Typography>
  }

  return (
    <Container maxWidth="md" sx={{ pt: 14, pb: 4 }}>
      <Typography variant="h4" gutterBottom>
        {article.title}
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        {article.shortDescription}
      </Typography>
      {article.coverImage && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 3,
            width: "100%",
          }}
        >
          <Image
            src={article.coverImage.url}
            alt={article.coverImage.title}
            width={800}
            height={200}
            layout="responsive"
            style={{
              objectFit: "cover",
              borderRadius: "8px",
              maxWidth: "100%",
              maxHeight: "300px",
            }}
          />
        </Box>
      )}
      <Box
        sx={{
          typography: "body1",
          "& > p": {
            mb: 6, // Space below each <p> tag
            fontSize: "1.25em",
            color: "text.secondary",
          },
          "& > h4": {
            fontSize: "1.6em",
          },
        }}
      >
        {documentToReactComponents(article?.content?.json)}
      </Box>
    </Container>
  )
}
