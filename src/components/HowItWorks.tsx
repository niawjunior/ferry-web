import { Box, Grid2, Typography } from "@mui/material"
import { Anchor, MessageSquare, Smile } from "lucide-react"

const HowItWorks = () => {
  const steps = [
    {
      icon: <MessageSquare size={48} />,
      title: "จองออนไลน์",
      description:
        "เลือกเรือแม่น้ำเจ้าพระยาที่คุณต้องการและจองได้ง่ายๆ ผ่านเพจของเรา แนะนำให้จองล่วงหน้า",
    },
    {
      icon: <Anchor size={48} />,
      title: "เดินทางถึงท่าเรือ",
      description:
        "ลงทะเบียนรับตั๋วที่ท่าเรือที่กำหนดล่วงหน้าอย่างน้อย 30 นาที",
    },
    {
      icon: <Smile size={48} />,
      title: "เพลิดเพลินกับการล่องเรือ",
      description:
        "ล่องเรือไปตามแม่น้ำเจ้าพระยาและสนุกสนานไปกับช่วงเวลาดีๆ กับเพื่อนๆ หรือคนสำคัญของคุณ เรือของเราออกแบบมาเพื่อสร้างเรื่องราวประทับใจให้กับคุณ",
    },
  ]

  return (
    <Box sx={{ py: 8, px: 2, backgroundColor: "#f8f8f8" }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontWeight: 600,
          color: "#333",
          mb: 6,
        }}
      >
        มาร่วมเป็นส่วนหนึ่งในการสัมผัสประสบการณ์อันแสนพิเศษ
      </Typography>
      <Grid2 container spacing={6} justifyContent="center">
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
                p: 4,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                backgroundColor: "#fff",
                borderRadius: "30px",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                },
              }}
            >
              <Box
                sx={{
                  mb: 3,
                  color: "primary.main",
                  borderRadius: "50%",
                  width: 80,
                  height: 80,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {step.icon}
              </Box>
              <Typography
                variant="h5"
                component="h3"
                gutterBottom
                sx={{
                  fontWeight: 500,
                  color: "#333",
                }}
              >
                {step.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#666",
                  fontSize: "1rem",
                }}
              >
                {step.description}
              </Typography>
            </Box>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  )
}

export default HowItWorks
