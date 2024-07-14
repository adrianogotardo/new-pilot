import { styled, TextField } from "@mui/material";

export const TextContainer = styled("div")`
    width: ${(props) => props.width ? props.width : '200px'};
`;

export const TextFieldStyle = styled(TextField)(({ theme, height, width }) => ({
    width: '100%',
    height: `${height}`,
    '& .MuiOutlinedInput-root': {
        height: `${height}`,
        backgroundColor: theme.palette.primary.light,
        '& fieldset': {
            borderColor: theme.palette.secondary.light,
        },
        '&.Mui-focused fieldset': {
            borderColor: theme.palette.secondary.light,
        },
    },
    '& .MuiInputLabel-root': {
        fontSize: '0.75rem',
        transform: 'translate(14px, 6px) scale(1)',
        '&.MuiInputLabel-shrink': {
            transform: 'translate(14px, -6px) scale(0.75)',
        },
        '&.Mui-focused': {
            color: theme.palette.secondary.light,
        },
    },
}));