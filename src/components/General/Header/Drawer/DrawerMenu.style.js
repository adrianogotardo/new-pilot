import { styled } from "@mui/material";
import MenuItem from '@mui/material/MenuItem'

export const MenuItemStyle = styled(MenuItem)`
    width: 200px;
    margin-top: 10px;

    font-size: 17px;

    span{
        margin-left: 10px;
    }
`;

export const MarginBox = styled("div")`
    width: 100%;
    height: 25px;
`;