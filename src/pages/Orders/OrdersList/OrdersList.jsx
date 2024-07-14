import { TopContainer } from "./OrdersList.style";
import BasicButton from "../../../components/UI/BasicButton/BasicButton"
import OrdersTable from './OrdersTable/OrdersTable'


export default function OrdersList({ setIsInCreateOrderPage }) {
    return (
        <div>
            <TopContainer>
                <h1>Pedidos</h1>
                <div>
                    <BasicButton> Config. de busca </BasicButton>
                    <BasicButton action={() => setIsInCreateOrderPage(true)}> + Adicionar pedido </BasicButton>
                </div>
            </TopContainer>
            <OrdersTable />
        </div>
    );
}
