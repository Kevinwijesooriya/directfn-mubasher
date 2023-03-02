import React from "react";
import {
  Button,
  Grid,
  Typography,
  Stack,
  Container,
  IconButton,
} from "@mui/material";
import dfnLogo from "../../assets/images/dfnLogo.png";
import CurrentSubscriptionsTable from "../Subscription/components/CurrentSubscriptionsTable";
import PreviousSubscriptionsTable from "../Subscription/components/PreviousSubscriptionsTable";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Link } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
import {
  CenterAlignedGrid,
  SpaceBetweenCenterAlignedGrid,
} from "../Subscription/styles";

const Landing = () => {
  const userDetails = {
    name: { en: "Mr. Mohammed Saleh", ar: "السيد محمد الصالح" },
    username: "Mohsaleh123",
  };
  const [language, setLanguage] = React.useState("ar");
  const handleToggleLanguage = () => {
    if (language === "en") {
      setLanguage("ar");
    } else {
      setLanguage("en");
    }
  };
  return (
    <Container dir={language === "en" ? "ltr" : "rtl"}>
      <IconButton color="primary" onClick={handleToggleLanguage}>
        <LanguageIcon />
        {language}
      </IconButton>
      <Grid container sx={{ height: "100vh" }} spacing={4}>
        <CenterAlignedGrid item xs={12} md={4}>
          <img alt="dfnLogo" src={dfnLogo} width={300} />
        </CenterAlignedGrid>

        <CenterAlignedGrid item xs={12} md={8}>
          <Typography variant="h3">
            {language === "en" ? "Hello" : "أهلا و سهلا"}
          </Typography>
          <Typography variant="h4">
            {language === "en" ? userDetails.name.en : userDetails.name.ar}
          </Typography>
          <Typography variant="h5">{userDetails.username}</Typography>
        </CenterAlignedGrid>

        <SpaceBetweenCenterAlignedGrid
          item
          xs={12}
          md={4}
          sx={{ height: "60vh" }}
        >
          <Stack spacing={3}>
            <Button
              startIcon={<KeyboardDoubleArrowRightIcon />}
              variant="contained"
            >
              {language === "en" ? "Main Page" : "ا ل ر ئ يسية"}
            </Button>
            <Button
              variant="contained"
              startIcon={<KeyboardDoubleArrowRightIcon />}
              component={Link}
              to="/subscription/market"
            >
              {language === "en" ? "Renew Subscription" : "تجديد الاشت ر اك"}
            </Button>
            <Button
              variant="contained"
              startIcon={<KeyboardDoubleArrowRightIcon />}
            >
              {language === "en" ? "Upgrade Subscription" : "ت رقية الاشت ر اك"}
            </Button>
            <Button
              variant="contained"
              startIcon={<KeyboardDoubleArrowRightIcon />}
            >
              {language === "en"
                ? "Change User Information"
                : "تغي ي ر معلومات ا لمستخدم"}
            </Button>
            <Button
              variant="contained"
              startIcon={<KeyboardDoubleArrowRightIcon />}
            >
              {language === "en" ? "Change Password" : "تغي ي ر كلمة ا لسر ر"}
            </Button>
            <Button
              variant="contained"
              startIcon={<KeyboardDoubleArrowRightIcon />}
            >
              {language === "en"
                ? "Upload Invoice File"
                : "تحميل صورة ا لحوا لة"}
            </Button>
            <Button
              variant="contained"
              startIcon={<KeyboardDoubleArrowRightIcon />}
            >
              {language === "en" ? "Logout" : "خروج"}
            </Button>
          </Stack>
        </SpaceBetweenCenterAlignedGrid>

        <Grid item xs={12} md={8}>
          <Stack
            direction="row"
            spacing={language === "en" ? 2 : 0}
            justifyContent="flex-end"
            alignItems="center"
          >
            <Button variant="outlined" sx={{ marginLeft: 2 }}>
              {language === "en" ? "REDEEM POINTS" : "است بدل ا ل نقاط"}
            </Button>
            <Button variant="outlined">
              1750 {language === "en" ? " POINTS" : " نقطة"}
            </Button>
          </Stack>
          <Typography variant="h5">
            {" "}
            {language === "en"
              ? "Current Subscription"
              : "الاشت ر اكات ا لحا ل ية"}
          </Typography>
          <CurrentSubscriptionsTable language={language} />
          <Typography variant="h5">
            {language === "en"
              ? "Previous Subscription"
              : "الاشت ر اكات ا لسا بقة"}
          </Typography>
          <PreviousSubscriptionsTable language={language} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Landing;
