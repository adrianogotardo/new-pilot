import { styled } from "@mui/material";

export const Card = styled("div")`
    width: 100%;
    height: calc(100vh - 110px);
    background-color: ${(props) => props.theme.palette.primary.main};
    border-radius: 5px;
    padding:  15px 20px;

    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 7px;
        background-color: transparent;
        border-radius: 8px;
    }

    &::-webkit-scrollbar-thumb{
        background-color: lightgray;
        border-radius: 8px;
    }

    h1{

        font-size: 30px;
        font-weight: 700;
        color: ${(props) => props.theme.palette.secondary.dark};
    }
`;