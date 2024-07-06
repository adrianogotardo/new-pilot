import { useState } from "react";
import RoundButton from "../UI/RoundButton/RoundButton";
import { HeaderStyle, LogoImg, MenuIconStyle } from "./Header.style";
import DrawerMenu from "./Drawer/DrawerMenu";

export default function Header() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <HeaderStyle>
            <RoundButton action={() => setIsDrawerOpen(!isDrawerOpen)} transparent>
                <MenuIconStyle />
            </RoundButton>
            <LogoImg src="./assets/piotto-logo.png" />
            <DrawerMenu isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />
        </HeaderStyle>
    );
}