import { Container, Typography, Box, Grid2 } from "@mui/material"
import Image from "next/image" // for using optimized Next.js images
import bannerImage from "../../../public/banner-4.jpg" // add the appropriate image path

const AboutPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4, mt: 10 }}>
      {/* Header section */}
      <Grid2
        container
        justifyContent="center"
        alignItems="center"
        sx={{ mb: 6 }}
      >
        <Grid2 size={{ xs: 12, md: 12 }}>
          <Box sx={{ position: "relative", height: 300 }}>
            <Image
              src={bannerImage} // boat image you uploaded
              alt="Boat image"
              layout="fill"
              objectFit="cover"
              style={{ borderRadius: "8px" }}
            />
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 8 }}>
          <Typography
            variant="h2"
            component="h1"
            align="center"
            sx={{ fontWeight: 700, mt: 4, color: "primary.main" }}
          >
            เกี่ยวกับบริการเรือของเรา
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{ fontSize: "1.25rem", mt: 2, color: "text.secondary" }}
          >
            {`Fluke Journey นำเสนอแพลตฟอร์มที่ง่ายและเป็นมิตรต่อสิ่งแวดล้อมสำหรับการจองเรือเพื่อการรับประทานอาหาร ท่องเที่ยว และสำรวจแม่น้ำที่งดงาม ไม่ว่าจะเป็นดินเนอร์สุดโรแมนติก หรือการผจญภัยสำหรับครอบครัว เรือของเรามอบประสบการณ์ที่ปลอดภัยและเพลิดเพลินสำหรับทุกคน`}
          </Typography>
        </Grid2>
      </Grid2>

      {/* Mission/Information Section */}
      <Grid2 container spacing={4} justifyContent="center">
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Typography variant="h4" gutterBottom>
            พันธกิจของเรา
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "1rem", lineHeight: 1.6 }}
          >
            เรามุ่งมั่นที่จะทำให้ทุกคนสามารถเข้าถึงการล่องเรือได้ง่ายขึ้น
            โดยการให้บริการเรือที่ขับขี่ง่าย และเป็นมิตรต่อสิ่งแวดล้อม
            คุณสามารถเพลิดเพลินกับการสำรวจแม่น้ำพร้อมกับกิจกรรมรับประทานอาหารและพักผ่อนในบรรยากาศที่แสนสบาย
          </Typography>
        </Grid2>

        <Grid2 size={{ xs: 12, md: 6 }}>
          <Typography variant="h4" gutterBottom>
            ทำไมต้องเลือกเรา?
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "1rem", lineHeight: 1.6 }}
          >
            เรือของเราออกแบบมาเพื่อการผจญภัยที่ไม่ซ้ำใคร
            เหมาะสำหรับการรับประทานอาหารบนเรือ หรือการสำรวจความงดงามของแม่น้ำ
            ด้วยระบบมอเตอร์ไฟฟ้าที่เป็นมิตรต่อสิ่งแวดล้อม
            คุณสามารถล่องเรือได้อย่างสบายใจ
            โดยไม่ต้องกังวลเกี่ยวกับผลกระทบต่อธรรมชาติ
          </Typography>
        </Grid2>
      </Grid2>
    </Container>
  )
}

export default AboutPage
