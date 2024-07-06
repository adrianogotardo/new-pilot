import { RiLogoutBoxLine } from "react-icons/ri";
import {
    IoHomeOutline,
    IoPeopleOutline,
    IoTimeOutline,
    IoBriefcaseOutline,
    IoStorefrontOutline,
    IoCashOutline,
    IoReceiptOutline,
    IoFastFoodOutline,
    IoFileTrayFullOutline,
} from "react-icons/io5";

export const menuItems = [
    {
        icon: <IoHomeOutline />,
        name: 'Dashboard',
        route: '/'
    },
    {
        icon: <IoReceiptOutline />,
        name: 'Pedidos',
        route: '/orders'
    },
    {
        icon: <IoPeopleOutline />,
        name: 'Funcionários',
        route: '/employees' //Pagamentos, empréstimos, presença
    },
    {
        icon: <IoBriefcaseOutline />,
        name: 'Obras',
        route: '/working-sites'
    },
    {
        icon: <IoStorefrontOutline />,
        name: 'Lojas',
        route: '/stores'
    },
    {
        icon: <IoFastFoodOutline />,
        name: 'Refeições',
        route: '/meals'
    },
    {
        icon: <IoCashOutline />,
        name: 'Entradas',
        route: '/incomes'
    },
    {
        icon: <RiLogoutBoxLine />,
        name: 'Sair',
        route: '/logout'
    }
];