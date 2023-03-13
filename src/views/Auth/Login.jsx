import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
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

const Login = () => {
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
            {language === "en" ? "Login to Account" : "الدخول الى الحساب"}
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
          >
            <Stack
              direction={"row"}
              justifyContent="center"
              alignItems="center"
              paddingBottom={4}
              spacing={8}
            >
              <Typography variant="subtitle2">
                {language === "en" ? "USERNAME" : "اسم ا لمستخدم"}
              </Typography>
              <TextField
                placeholder="hello@DirectFN.com.sa"
                variant="outlined"
              />
            </Stack>
            <Stack
              direction={"row"}
              justifyContent="center"
              alignItems="center"
              paddingY={4}
              spacing={8}
            >
              <Typography variant="subtitle2">
                {language === "en" ? "PASSWORD" : "كلمة ا لسر ر"}
              </Typography>
              <TextField
                placeholder="******"
                type="password"
                variant="outlined"
              />
            </Stack>
          </Stack>
          <Stack
            direction={"row"}
            justifyContent="space-between"
            alignItems="center"
            spacing={8}
          >
            <FormControlLabel
              labelPlacement="start"
              control={<Checkbox defaultChecked />}
              label={language === "en" ? "Remember Me" : "تذكر ني"}
            />

            <FormLabel
              component={Link}
              to="/auth/forgot-password"
              sx={{ textDecoration: "none" }}
            >
              {language === "en"
                ? "Forgot Password ?"
                : "است رجاع معلومات ا لدخول"}
            </FormLabel>

            <FormLabel
              component={Link}
              to="/auth/registration"
              sx={{ textDecoration: "none" }}
            >
              {language === "en" ? "Create Account" : "ا نشا ء حساب جديد"}
            </FormLabel>
          </Stack>
        </Box>
        <Button
          variant="contained"
          startIcon={<KeyboardDoubleArrowRightIcon />}
          component={Link}
          to="/main/landing"
          fullWidth={false}
        >
          {language === "en" ? "Sign in" : "الدخول"}
        </Button>
      </Grid>
    </Container>
  );
};

export default Login;
