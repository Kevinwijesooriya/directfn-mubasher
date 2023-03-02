import React from "react";
import { Button, Grid, Typography, Box } from "@mui/material";
import dfnEstore from "../../assets/images/dfnEstore.png";
import GCCflags from "../../assets/images/GCCflags.png";
import SaudiFlag from "../../assets/images/SaudiFlag.png";
import { Link } from "react-router-dom";
import { CenterAlignedGrid, SpaceBetweenCenterAlignedGrid } from "./styles";

const MarketSelector = () => {
  return (
    <Grid container sx={{ height: "100vh" }} spacing={4}>
      <CenterAlignedGrid item xs={12} md={6} sx={{ height: "30vh" }}>
        <img alt="dfnLogo" src={dfnEstore} width={500} />
      </CenterAlignedGrid>

      <CenterAlignedGrid item xs={12} md={6}>
        <Box
          border={1}
          borderColor="black"
          borderRadius={20}
          p={1}
          px={3}
          mt={3}
        >
          <Typography variant="h5" display="inline" fontWeight={700}>
            Select Market/ إختيار السوق{" "}
          </Typography>
        </Box>
      </CenterAlignedGrid>

      <SpaceBetweenCenterAlignedGrid
        item
        xs={12}
        md={6}
        sx={{ height: "60vh" }}
      >
        <Box>
          <img alt="GCCflags" src={GCCflags} width={300} />
        </Box>
        <Box>
          <Typography
            variant="h4"
            align="center"
            color="primary"
            fontWeight={700}
          >
            GCC Market
          </Typography>
          <Typography
            variant="h4"
            align="center"
            color="primary"
            fontWeight={700}
          >
            السوق الخليجي
          </Typography>
        </Box>
        <Button
          variant="outlined"
          style={{ border: "2px solid" }}
          component={Link}
          to="/subscription/product"
        >
          Click Here
        </Button>
      </SpaceBetweenCenterAlignedGrid>

      <Grid
        item
        xs={12}
        md={6}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        sx={{ height: "60vh" }}
      >
        <img alt="SaudiFlag" src={SaudiFlag} width={300} />
        <Box>
          <Typography
            variant="h4"
            align="center"
            color="primary"
            fontWeight={700}
          >
            Saudi Market
          </Typography>
          <Typography
            variant="h4"
            align="center"
            color="primary"
            fontWeight={700}
          >
            السوق السعودي
          </Typography>
        </Box>
        <Button
          variant="outlined"
          style={{ border: "2px solid" }}
          component={Link}
          to="/subscription/product"
        >
          Click Here
        </Button>
      </Grid>
    </Grid>
  );
};

export default MarketSelector;
