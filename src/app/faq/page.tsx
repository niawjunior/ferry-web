import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { getFAQList } from "~/server/libs/graphql/faq.graphql";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default async function Articles() {
  const faqList = await getFAQList();

  return (
    <Container sx={{ pt: { xs: "66px", md: "74px" } }}>
      <Stack sx={{ py: 2 }} gap={2}>
        <Typography variant="h3" textAlign="center">
          คำถามที่พบบ่อย
        </Typography>
        <Box>
          {faqList.map((faq) => {
            return (
              <Accordion key={faq.sys.id}>
                <AccordionSummary
                  aria-controls="panel1-content"
                  id="panel1-header"
                  expandIcon={<ExpandMoreIcon />}
                >
                  {faq.question}
                </AccordionSummary>
                <AccordionDetails>
                  <Box
                    sx={{
                      "& > p": {
                        mb: 6,
                        fontSize: "1.25em",
                        color: "text.secondary",
                      },
                      "& > h4": {
                        fontSize: "1.6em",
                      },
                    }}
                  >
                    {documentToReactComponents(faq?.answer?.json)}
                  </Box>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Box>
      </Stack>
    </Container>
  );
}
