import { Facebook } from "@mui/icons-material";
import { Box, Container, Link, Stack, Typography } from "@mui/material";

const TheMainFooter = () => {
  return (
    <Box component="footer" sx={{ bgcolor: "primary.main", p: 1 }}>
      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography color="white">
            © Copyright - ล่องเรือเจ้าพระยา by Fluke Journey
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Link
              sx={{ display: "inline-flex" }}
              href="https://www.facebook.com/Flukejourneytravel"
              target="_blank"
            >
              <Facebook sx={{ color: "white" }} />
            </Link>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default TheMainFooter;
