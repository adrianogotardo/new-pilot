import { Button, FormControl, InputLabel, MenuItem, Select, styled, TextField } from "@mui/material";

export const TextFieldStyle = styled(TextField)(({ theme, height }) => ({
    width: '100%',
    height: `35px`,
    '& .MuiOutlinedInput-root': {
        height: `35px`,
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

export const DeleteRowButton = styled(Button)`
    height: 35px;
    width: 100%;
    background-color: ${(props) => props.theme.palette.secondary.main};
    color: ${(props) => props.theme.palette.primary.light};

    transition: all 1s ease-in-out;

    :hover{
        background-color: ${(props) => props.theme.palette.secondary.dark};
        color: ${(props) => props.theme.palette.error.light};
        transform: scale(1.03);
        box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
    }
`;

export const ButtonStyle = styled('button')`
    height: 35px;
    width: 180px;
    background-color: ${(props) => props.danger ? props.theme.palette.error.main : props.theme.palette.secondary.main};
    border: none;
    border-radius: 5px;
    margin: 10px;

    color: white;
    font-size: 16px;

    transition: all 0.5s ease-in-out;
    
    :hover{
        cursor: pointer;
        filter: brightness(1.3);
    }
`;

export const FormControlStyle = styled(FormControl)`
    width: 100%;
`;
export const InputLabelStyle = styled(InputLabel)`
    background-color: ${(props) => props.theme.palette.primary.light};
    color: ${(props) => props.theme.palette.secondary.main};
    outline: none;
`;

export const SelectStyle = styled(Select)`
    width: 100%;
    height: 35px;
`;

export const MenuItemStyle = styled(MenuItem)``

export const ButtonContainer = styled("div")`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 10px 0 0 10px;
`;