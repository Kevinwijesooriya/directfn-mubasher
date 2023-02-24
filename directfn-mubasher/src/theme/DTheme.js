import { createTheme } from "@mui/material/styles";

const DTheme = createTheme({
    palette: {
        primary: {
            main: "#0c6fb5",
        },
    },
    typography: {
        fontFamily: "Roboto, sans-serif",
    },
    shape: {
        borderRadius: 20, // Set the border radius to 10
    },
});

export default DTheme;