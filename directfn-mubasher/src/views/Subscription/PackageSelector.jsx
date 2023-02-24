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
} from "@mui/material";
import dfnLogo from "../../assets/images/dfnLogo.png";
import crossPlatform from "../../assets/images/image2.png";

const PackageSelector = () => {
  const itemsPremium = [
    "All things pro in a brand new package",
    "Excellent performance & speed",
    "Realtime market data, news, announcements & analytic tools",
  ];
  const itemsStandard = [
    "All things pro in a brand new package",
    "Excellent performance & speed",
    "Realtime market data, news, announcements & analytic tools",
  ];
  const itemsLite = [
    "Full Financial Statements & Financial Ratios.",
    "Pre-built dashboards for easy & quick navigation.",
    "Advanced new professional charting with increased line",
  ];
  return (
    <Grid container sx={{ height: "100vh" }} spacing={4}>
      <Grid
        item
        xs={12}
        md={6}
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{ height: "30vh" }}
      >
        <img alt="dfnLogo" src={crossPlatform} width={300} />
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{ height: "35vh" }}
      >
        <img alt="dfnLogo" src={dfnLogo} width={250} />
        <Box
          border={1}
          borderColor="black"
          borderRadius={20}
          p={1}
          px={3}
          mt={3}
        >
          <Typography variant="h5" display="inline" fontWeight={700}>
            Select Package/ إختيار الباقة
          </Typography>
        </Box>
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
        <Typography
          variant="h4"
          align="center"
          color="primary"
          fontWeight={700}
        >
          Premium
        </Typography>
        <Box>
          <Divider
            variant="middle"
            style={{
              borderBottomWidth: 2,
              borderColor: "black",
              marginBottom: "20px",
            }}
          />
          <List>
            {itemsPremium.map((item) => (
              <ListItem key={item}>
                <ListItemAvatar>•</ListItemAvatar>
                {item}
              </ListItem>
            ))}
          </List>
        </Box>
        <Button variant="outlined" style={{ border: "2px solid" }}>
          Click Here
        </Button>
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
        <Typography
          variant="h4"
          align="center"
          color="primary"
          fontWeight={700}
        >
          Standard
        </Typography>
        <Box>
          <Divider
            variant="middle"
            style={{
              borderBottomWidth: 2,
              borderColor: "black",
              marginBottom: "20px",
            }}
          />
          <List>
            {itemsStandard.map((item) => (
              <ListItem key={item}>
                <ListItemAvatar>•</ListItemAvatar>
                {item}
              </ListItem>
            ))}
          </List>
        </Box>
        <Button variant="outlined" style={{ border: "2px solid" }}>
          Click Here
        </Button>
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
        <Typography
          variant="h4"
          align="center"
          color="primary"
          fontWeight={700}
        >
          Lite
        </Typography>
        <Box>
          <Divider
            variant="middle"
            style={{
              borderBottomWidth: 2,
              borderColor: "black",
              marginBottom: "20px",
            }}
          />
          <List>
            {itemsLite.map((item) => (
              <ListItem key={item}>
                <ListItemAvatar>•</ListItemAvatar>
                {item}
              </ListItem>
            ))}
          </List>
        </Box>
        <Button variant="outlined" style={{ border: "2px solid" }}>
          Click Here
        </Button>
      </Grid>
    </Grid>
  );
};

export default PackageSelector;
