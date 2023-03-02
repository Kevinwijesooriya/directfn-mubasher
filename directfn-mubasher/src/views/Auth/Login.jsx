import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import dfnLogo from "../../assets/images/dfnLogo.png";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container>
      <Stack direction={"row"} justifyContent="space-between" paddingY={4}>
        <Typography variant="h4">Login to Account</Typography>
        <img alt="dfnLogo" src={dfnLogo} width={250} />
      </Stack>
      <Stack direction={"column"} alignItems="center" paddingY={4}>
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
              <Typography variant="subtitle2">USERNAME</Typography>
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
              <Typography variant="subtitle2">PASSWORD</Typography>
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
              label="Remember Me"
            />

            <FormLabel component={Link} to="#" sx={{ textDecoration: "none" }}>
              Forgot Password ?
            </FormLabel>

            <FormLabel component={Link} to="#" sx={{ textDecoration: "none" }}>
              Create Account
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
          Sign in
        </Button>
      </Stack>
    </Container>
  );
};

export default Login;
