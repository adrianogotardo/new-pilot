import { styled } from "@mui/material";

export const InfoContainer = styled('div')`
    width: 100%;
    background-color: ${(props) => props.theme.palette.primary.light};
    border: 1px solid ${(props) => props.theme.palette.primary.dark};
    border-radius: 5px;
    margin: 15px 0;
    padding-bottom: 20px;

    display: flex;
    justify-content: space-between;
`;

export const ButtonsContainer = styled('div')`
    width: 100%;
    display: flex;
    justify-content: end;
`;
