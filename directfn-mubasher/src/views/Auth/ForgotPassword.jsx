import {
  Box,
  Button,
  Container,
  FormLabel,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import dfnLogo from "../../assets/images/dfnLogo.png";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Link } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";

const ForgotPassword = () => {
  const [language, setLanguage] = React.useState("en");
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
        {language === "en" ? "ar" : "en"}
      </IconButton>
      <Grid
        container
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        // sx={{ background: "red" }}
        paddingY={4}
      >
        <Grid item xs={12} md={6}>
          <Typography variant="h4">
            {language === "en" ? "Forgot Password" : "Forgot Password"}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
        >
          <img alt="dfnLogo" src={dfnLogo} width={250} />
        </Grid>
      </Grid>
      <Grid container direction={"column"} alignItems="center" paddingY={4}>
        <Box sx={{ border: 1, borderRadius: 1, p: 2, paddingX: 8, m: 2 }}>
          <Stack
            direction={"column"}
            justifyContent="space-between"
            paddingY={4}
            spacing={4}
          >
            <Stack
              direction={"row"}
              justifyContent="center"
              alignItems="center"
              spacing={8}
            >
              <Typography variant="subtitle2" sx={{ width: "160px" }}>
                {language === "en" ? "Username" : "Username"}
              </Typography>
              <TextField variant="outlined" />
            </Stack>
            <Stack
              direction={"row"}
              justifyContent="center"
              alignItems="center"
              spacing={8}
            >
              <Typography variant="subtitle2" sx={{ width: "160px" }}>
                {language === "en" ? "Mobile Number" : "Mobile Number"}
              </Typography>
              <TextField variant="outlined" />
            </Stack>
            <Button
              variant="contained"
              component={Link}
              to="/main/landing"
              fullWidth={false}
            >
              {language === "en" ? "Send OTP" : "Send OTP"}
            </Button>
            <Stack
              direction={"row"}
              justifyContent="center"
              alignItems="center"
              spacing={8}
            >
              <Typography variant="subtitle2" sx={{ width: "160px" }}>
                {language === "en" ? "Please Enter OTP" : "Please Enter OTP"}
              </Typography>
              <TextField variant="outlined" type="number" />
            </Stack>
            <Stack
              direction={"row"}
              justifyContent="center"
              alignItems="center"
              spacing={8}
            >
              <Typography variant="subtitle2" sx={{ width: "160px" }}>
                {language === "en"
                  ? "Enter New Password"
                  : "Enter New Password"}
              </Typography>
              <TextField variant="outlined" type="password" />
            </Stack>
            <Stack
              direction={"row"}
              justifyContent="center"
              alignItems="center"
              spacing={8}
            >
              <Typography variant="subtitle2" sx={{ width: "160px" }}>
                {language === "en"
                  ? "Confirm New Password"
                  : "Confirm New Password"}
              </Typography>
              <TextField variant="outlined" type="password" />
            </Stack>
          </Stack>
          <Stack direction={"row"} justifyContent="center" alignItems="center">
            <FormLabel
              component={Link}
              to="/auth/forgot-username"
              sx={{ textDecoration: "none" }}
            >
              {language === "en" ? "Forgot Username ?" : "Forgot Username ?"}
            </FormLabel>
          </Stack>
        </Box>
        <Button
          variant="contained"
          startIcon={<KeyboardDoubleArrowRightIcon />}
          component={Link}
          to="/auth/login"
          fullWidth={false}
        >
          {language === "en" ? "OK" : "OK"}
        </Button>
      </Grid>
    </Container>
  );
};

export default ForgotPassword;
