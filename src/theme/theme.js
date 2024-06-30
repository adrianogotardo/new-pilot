import { createTheme } from "@mui/material";

const palette = {
    primary: {
        light: '#FFFFFF',
        main: '#FAFAFA',
        dark: '#EAEAEA'
    },
    secondary: {
        light: '#7F8586',
        main: '#595959',
        dark: '#34393a'
    },
    success: {
        light: '#81c784',
        main: '#4caf50',
        dark: '#388e3c'
    },
    error: {
        light: '#e57373',
        main: '#f44336',
        dark: '#d32f2f'
    },
    warning: {
        light: '#ffb74d',
        main: '#ff9800',
        dark: '#f57c00'
    },
    info: {
        light: '#64b5f6',
        main: '#2196f3',
        dark: '#1976d2'
    },
    company: {
        golden: '#bb9d6f'
    }
}

export const theme = createTheme({
    palette: palette,
    components: {
        MuiDataGrid: {
            styleOverrides: {
                root: {
                    border: "none",
                    color: palette.secondary.light,
                },
                columnHeader: {
                    fontSize: "0.75rem",
                    textAlign: "center",
                },
                row: {
                    margin: "0.25rem",
                    padding: "0.25rem",
                },
            },
        },
    },
    mixins: {
        MuiDataGrid: {
            containerBackground: "rgba(0, 0, 0, 0)",
        },
    },
});