import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

export const SliderStyle = styled(motion.div)`
    height: 105%;
    width: 50%;
    background-color: ${(props) => props.theme.palette.primary.dark};
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.55) 0px 5px 15px;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    position: absolute;
    top: -2.5%;
    left: 0px;
    z-index: 10;
`;

export const LogoStyle = styled("img")`
    height: 16vh;
`;

export const SwitchAuthButton = styled('button')`
    background-color: transparent;
    border: none;
    outline: none;

    color: ${(props) => props.theme.palette.secondary.main};
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
    text-decoration: underline;

    transition: all 0.5s ease-in-out;

    :hover{
        cursor: pointer;
        filter: brightness(1.5);
    }
`;