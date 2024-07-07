import { Card, styled } from "@mui/material";

export const CardStyle = styled('div')`
    height: ${(props) => props.height ? props.height : '200px'};
    background-color: ${(props) => props.theme.palette.primary.light};
    border-radius: 5px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;