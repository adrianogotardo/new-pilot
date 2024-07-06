import { styled } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";

export const HeaderStyle = styled("header")`
    width: 100%;
    height: 50px;
    background-color: ${props => props.theme.palette.primary.dark};
    background-image: url("./assets/header-pattern.png");
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    padding: 0 25px;
    margin-bottom: 25px;

    display: flex;
    align-items: center;
`;

export const MenuIconStyle = styled(MenuIcon)`
    color: ${(props) => props.theme.palette.secondary.main};
    font-size: 30px;
`;

export const LogoImg = styled("img")`
    height: 32px;
    margin-left: 25px;
`;

