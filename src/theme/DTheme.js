import { createTheme } from "@mui/material/styles";

const DTheme = createTheme({
    direction: 'rtl',
    palette: {
        primary: {
            main: "#0c6fb5",
        },
    },
    typography: {
        fontFamily: "Quicksand,Almarai",
    },
    shape: {
        borderRadius: 20, // Set the border radius to 10
    },
});

export default DTheme;