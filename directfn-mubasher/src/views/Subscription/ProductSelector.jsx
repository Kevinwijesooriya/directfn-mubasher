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
  ListItemText,
} from "@mui/material";
import dfnLogo from "../../assets/images/dfnLogo.png";
import crossPlatform from "../../assets/images/crossPlatform.png";
import { Link } from "react-router-dom";
import { CenterAlignedGrid, SpaceBetweenCenterAlignedGrid } from "./styles";

const ProductSelector = () => {
  const itemsDFNPro = [
    "All things pro in a brand new package",
    "Excellent performance & speed",
    "Realtime market data, news, announcements & analytic tools",
  ];
  const itemsDFNPlus = [
    "Full Financial Statements & Financial Ratios.",
    "Pre-built dashboards for easy & quick navigation.",
    "Advanced new professional charting with increased line",
  ];
  const itemsDFNSD = [
    "All things pro in a brand new package",
    "Excellent performance & speed",
    "Realtime market data, news, announcements & analytic tools",
  ];
  return (
    <Grid container sx={{ height: "100vh" }} spacing={4}>
      <CenterAlignedGrid item xs={12} md={6} sx={{ height: "30vh" }}>
        <img alt="dfnLogo" src={crossPlatform} width={300} />
      </CenterAlignedGrid>

      <CenterAlignedGrid item xs={12} md={6} sx={{ height: "35vh" }}>
        <img alt="dfnLogo" src={dfnLogo} width={250} />
        <Box
          border={1}
          borderColor="black"
          borderRadius={20}
          p={1}
          px={3}
          mt={3}
        >
          <Typography variant="h5" fontWeight={700}>
            Select Product/إختيار المنتج
          </Typography>
        </Box>
      </CenterAlignedGrid>

      <SpaceBetweenCenterAlignedGrid
        item
        xs={12}
        md={4}
        sx={{ height: "60vh" }}
      >
        <Typography
          variant="h4"
          align="center"
          color="primary"
          fontWeight={700}
        >
          DirectFN PRO
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
            {itemsDFNPro.map((item) => (
              <ListItem key={item}>
                <ListItemAvatar>•</ListItemAvatar>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Box>
        <Button
          variant="outlined"
          style={{ border: "2px solid" }}
          component={Link}
          to="/subscription/package"
        >
          Click Here
        </Button>
      </SpaceBetweenCenterAlignedGrid>

      <SpaceBetweenCenterAlignedGrid
        item
        xs={12}
        md={4}
        sx={{ height: "60vh" }}
      >
        <Typography
          variant="h4"
          align="center"
          color="primary"
          fontWeight={700}
        >
          DirectFN Plus
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
            {itemsDFNPlus.map((item) => (
              <ListItem key={item}>
                <ListItemAvatar>•</ListItemAvatar>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Box>
        <Button
          variant="outlined"
          style={{ border: "2px solid" }}
          component={Link}
          to="/subscription/package"
        >
          Click Here
        </Button>
      </SpaceBetweenCenterAlignedGrid>

      <SpaceBetweenCenterAlignedGrid
        item
        xs={12}
        md={4}
        sx={{ height: "60vh" }}
      >
        <Typography
          variant="h4"
          align="center"
          color="primary"
          fontWeight={700}
        >
          DirectFN Smart Devices
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
            {itemsDFNSD.map((item) => (
              <ListItem key={item}>
                <ListItemAvatar>•</ListItemAvatar>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Box>
        <Button
          variant="outlined"
          style={{ border: "2px solid" }}
          component={Link}
          to="/subscription/package"
        >
          Click Here
        </Button>
      </SpaceBetweenCenterAlignedGrid>
    </Grid>
  );
};

export default ProductSelector;
