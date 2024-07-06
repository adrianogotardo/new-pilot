import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

export const Background = styled("div")`
    width: 100vw;
    height: 100vh;
    background: ${(props) => props.theme.palette.primary.dark};
    background-image: url("./assets/background-pattern.png");
    background-size: cover;
    background-repeat: no-repeat;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TrackContainer = styled(motion.section)`
    width: 80%;
    height: 80%;
    background-color:${(props) => props.theme.palette.secondary.dark};
    border-radius: 5px;
    padding: 20px;

    display: flex;
    justify-content: space-around;

    position: relative;
`;

export const ContainerSection = styled('form')`
    width: 50%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const TitleStyle = styled('h1')`
    font-size: 30px;
    font-weight: 500;
    color: ${(props) => props.theme.palette.company.golden};

    margin-bottom: 25px;
`;
