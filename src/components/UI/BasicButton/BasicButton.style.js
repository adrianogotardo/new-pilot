import { keyframes, styled } from "@mui/material";

export const ButtonStyle = styled('button')`
    height: 30px;
    width: 180px;
    background-color: ${(props) => props.danger ? props.theme.palette.error.main : props.theme.palette.secondary.dark};
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

