import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";

const CenterAlignedGrid = styled(Grid)(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
}));

const SpaceBetweenCenterAlignedGrid = styled(Grid)(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center"
}));

export {
    CenterAlignedGrid, SpaceBetweenCenterAlignedGrid
};