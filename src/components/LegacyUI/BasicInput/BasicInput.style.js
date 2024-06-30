import { Box, TextField, styled } from "@mui/material";

export const BoxStyle = styled(Box)(({ theme }) => ({
    width: '50%',
    '& > :not(style)': {
        margin: theme.spacing(1),
        width: '100%',
    },
}));

export const InputStyle = styled(TextField)`
    background-color: ${(props) => props.theme.palette.primary.dark};
    border-radius: 3px;

    & .MuiInputLabel-root {
        color: ${(props) => props.theme.palette.secondary.main};
        padding: 2px 10px;
    }
    
    & .MuiInputLabel-root.Mui-focused {
        color: ${(props) => props.theme.palette.company.golden};
    }
    
    & .MuiInput-underline:before {
        border-bottom-color: transparent;
    }

    & .MuiInput-underline:after {
        border-bottom-color: ${(props) => props.theme.palette.company.golden};
    }

    & .MuiInputBase-input {
        padding-left: 10px;
    }

`;