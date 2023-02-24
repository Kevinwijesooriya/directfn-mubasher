import React from "react";
import {
  Button,
  Divider,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Box,
  Stack,
  Container,
} from "@mui/material";
import dfnLogo from "../../assets/images/dfnLogo.png";
import CurrentSubscriptionsTable from "../../components/CurrentSubscriptionsTable";
import PreviousSubscriptionsTable from "../../components/PreviousSubscriptionsTable";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const Landing = () => {
  return (
    <Container>
      <Grid container sx={{ height: "100vh" }} spacing={4}>
        <Grid
          item
          xs={12}
          md={4}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <img alt="dfnLogo" src={dfnLogo} width={300} />
        </Grid>

        <Grid
          item
          xs={12}
          md={8}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h3">Hello</Typography>
          <Typography variant="h4">Mr. Mohammed Saleh</Typography>
          <Typography variant="h5">Mohsaleh123</Typography>
        </Grid>

        <Grid
          item
          xs={12}
          md={4}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
          sx={{ height: "60vh" }}
        >
          <Stack spacing={3}>
            <Button
              startIcon={<KeyboardDoubleArrowRightIcon />}
              variant="contained"
            >
              Main Page
            </Button>
            <Button
              variant="contained"
              startIcon={<KeyboardDoubleArrowRightIcon />}
            >
              Renew Subscription
            </Button>
            <Button
              variant="contained"
              startIcon={<KeyboardDoubleArrowRightIcon />}
            >
              Upgrade Subscription
            </Button>
            <Button
              variant="contained"
              startIcon={<KeyboardDoubleArrowRightIcon />}
            >
              Change User Information
            </Button>
            <Button
              variant="contained"
              startIcon={<KeyboardDoubleArrowRightIcon />}
            >
              Change Password
            </Button>
            <Button
              variant="contained"
              startIcon={<KeyboardDoubleArrowRightIcon />}
            >
              Upload Invoice File
            </Button>
            <Button
              variant="contained"
              startIcon={<KeyboardDoubleArrowRightIcon />}
            >
              Logout
            </Button>
          </Stack>
        </Grid>

        <Grid item xs={12} md={8}>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="flex-end"
            alignItems="center"
          >
            <Button variant="outlined">REDEEM POINTS</Button>
            <Button variant="outlined">1750 POINTS</Button>
          </Stack>
          <Typography variant="h5">Current Subscription</Typography>
          <CurrentSubscriptionsTable />
          <Typography variant="h5">Previous Subscription</Typography>
          <PreviousSubscriptionsTable />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Landing;
