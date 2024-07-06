import { styled } from "@mui/material";

export const RoundButtonStyle = styled("button")`
    width: 40px;
    height: 40px;
    background-color: ${(props) => props.transparent ? 'transparent' : props.theme.palette.primary.dark};
    border: none;
    border-radius: 50%;
    outline: none;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 0.5s ease-in-out;

    :hover{
        cursor: pointer;
        background-color: ${(props) => props.theme.palette.primary.dark};
        filter: brightness(0.9);
    }
`;

