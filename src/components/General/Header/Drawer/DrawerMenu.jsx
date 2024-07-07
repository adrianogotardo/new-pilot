import { MarginBox, MenuItemStyle } from './DrawerMenu.style';
import { Drawer } from "@mui/material";
import { menuItems } from './Drawer.data';
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from '../../../../context/AuthContext'

export default function DrawerMenu({ isOpen, setIsOpen }) {

    const navigate = useNavigate();
    const { logout } = useContext(AuthContext)

    function handleClick(route) {
        console.log(route);
        if (route === '/logout') {
            navigate('/')
            logout();
            return;
        }

        setIsOpen(false);
        navigate(route);

        return;
    }

    return (
        <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
            <MarginBox />
            {
                menuItems.map((item, index) => {
                    return (
                        <MenuItemStyle key={index} onClick={() => handleClick(item.route)}>
                            {item.icon}
                            <span>{item.name}</span>
                        </MenuItemStyle>
                    )
                })
            }
        </Drawer>
    )
};