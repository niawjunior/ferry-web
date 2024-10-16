import { Box, Grid2, Typography } from "@mui/material"
import { Anchor, MessageSquare, Smile } from "lucide-react"

const HowItWorks = () => {
  const steps = [
    {
      icon: <MessageSquare size={48} />,
      title: "จองออนไลน์",
      description:
        "เลือกประเภทการล่องเรือสำราญที่คุณต้องการและจองได้ง่ายๆ ผ่านเว็บไซต์ของเรา จองล่วงหน้าได้ในวันเดียวกัน!",
    },
    {
      icon: <Anchor size={48} />,
      title: "เดินทางถึงท่าเรือ",
      description:
        "พบกับลูกเรือของคุณที่ท่าเรือที่กำหนดล่วงหน้า 15 นาทีก่อนออกเดินทาง อย่าลืมนำเครื่องดื่มและอาหารว่างติดตัวไป หรือสั่งชุดอาหารล่วงหน้ากับเราได้",
    },
    {
      icon: <Smile size={48} />,
      title: "เพลิดเพลินกับการล่องเรือ",
      description:
        "ล่องเรือไปตามแม่น้ำเจ้าพระยาและสนุกสนานไปกับช่วงเวลาดีๆ กับเพื่อนๆ ของคุณ เรือของเราออกแบบมาเพื่อความสนุกสนานเต็มที่!",
    },
  ]

  return (
    <Box sx={{ py: 8, px: 2, backgroundColor: "#f2f2f2" }}>
      <Typography variant="h4" align="center" gutterBottom>
        มาร่วมเป็นส่วนหนึ่งในการสัมผัสประสบการณ์อันแสนพิเศษ
      </Typography>
      <Grid2 container spacing={4} justifyContent="center">
        {steps.map((step, index) => (
          <Grid2
            size={{
              xs: 12,
              md: 6,
              lg: 4,
            }}
            key={index}
          >
            <Box
              sx={{
                p: 3,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Box
                sx={{
                  mb: 2,
                  color: "primary.main",
                  border: "1px solid",
                  borderRadius: "50%",
                  width: 100,
                  height: 100,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {step.icon}
              </Box>
              <Typography variant="h5" component="h3" gutterBottom>
                {step.title}
              </Typography>
              <Typography variant="body1">{step.description}</Typography>
            </Box>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  )
}

export default HowItWorks
