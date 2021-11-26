import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#3498db'
        },
        warning: {
            main: '#f1c40f'
        },
        success: {
            main: '#16a085'
        }
    },

});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#34495e'
        },
        warning: {
            main: '#f1c40f'
        }
    },

});

export {lightTheme, darkTheme};