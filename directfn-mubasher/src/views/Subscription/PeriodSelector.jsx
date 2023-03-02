import React from "react";
import { Button, Grid, Typography, Box } from "@mui/material";
import dfnLogo from "../../assets/images/dfnLogo.png";
import periodICO from "../../assets/images/periodICO.png";
import { Link } from "react-router-dom";
import { CenterAlignedGrid, SpaceBetweenCenterAlignedGrid } from "./styles";

const PeriodSelector = () => {
  return (
    <Grid container sx={{ height: "100vh" }} spacing={4}>
      <CenterAlignedGrid item xs={12} md={6} sx={{ height: "30vh" }}>
        <img alt="periodICO" src={periodICO} width={300} />
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
          <Typography variant="h5" display="inline" fontWeight={700}>
            Select Period/ إختيار المدة
          </Typography>
        </Box>
      </CenterAlignedGrid>

      <SpaceBetweenCenterAlignedGrid
        item
        xs={12}
        md={3}
        sx={{ height: "60vh" }}
      >
        <Box sx={{ border: 1, borderRadius: 1, p: 2 }}>
          <Typography variant="h4" align="center" fontWeight={700}>
            سنة واحدة
          </Typography>
          <Typography variant="h4" align="center" fontWeight={700}>
            1 Year
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h4"
            align="center"
            color="primary"
            fontWeight={700}
          >
            1600 SR
          </Typography>
          <Typography variant="h6" align="center" color="red" fontWeight={700}>
            + 2 months free{" "}
          </Typography>
        </Box>
        <Button
          variant="outlined"
          style={{ border: "2px solid" }}
          component={Link}
          to="/"
        >
          Click Here
        </Button>
      </SpaceBetweenCenterAlignedGrid>

      <SpaceBetweenCenterAlignedGrid
        item
        xs={12}
        md={3}
        sx={{ height: "60vh" }}
      >
        <Box sx={{ border: 1, borderRadius: 1, p: 2 }}>
          <Typography variant="h4" align="center" fontWeight={700}>
            ٦ شهور
          </Typography>
          <Typography variant="h4" align="center" fontWeight={700}>
            6 Months
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h4"
            align="center"
            color="primary"
            fontWeight={700}
          >
            800 SR
          </Typography>
        </Box>
        <Button
          variant="outlined"
          style={{ border: "2px solid" }}
          component={Link}
          to="/"
        >
          Click Here
        </Button>
      </SpaceBetweenCenterAlignedGrid>

      <SpaceBetweenCenterAlignedGrid
        item
        xs={12}
        md={3}
        sx={{ height: "60vh" }}
      >
        <Box sx={{ border: 1, borderRadius: 1, p: 2 }}>
          <Typography variant="h4" align="center" fontWeight={700}>
            ۳ شهور
          </Typography>
          <Typography variant="h4" align="center" fontWeight={700}>
            3 Months
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h4"
            align="center"
            color="primary"
            fontWeight={700}
          >
            400 SR
          </Typography>
        </Box>
        <Button
          variant="outlined"
          style={{ border: "2px solid" }}
          component={Link}
          to="/"
        >
          Click Here
        </Button>
      </SpaceBetweenCenterAlignedGrid>
      <SpaceBetweenCenterAlignedGrid
        item
        xs={12}
        md={3}
        sx={{ height: "60vh" }}
      >
        <Box sx={{ border: 1, borderRadius: 1, p: 2 }}>
          <Typography variant="h4" align="center" fontWeight={700}>
            شهر 
          </Typography>
          <Typography variant="h4" align="center" fontWeight={700}>
            1 Month
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h4"
            align="center"
            color="primary"
            fontWeight={700}
          >
            200 SR
          </Typography>
        </Box>
        <Button
          variant="outlined"
          style={{ border: "2px solid" }}
          component={Link}
          to="/"
        >
          Click Here
        </Button>
      </SpaceBetweenCenterAlignedGrid>
    </Grid>
  );
};

export default PeriodSelector;
