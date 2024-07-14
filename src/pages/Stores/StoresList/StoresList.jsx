import { TopContainer } from "./StoresList.style";
import BasicButton from "../../../components/UI/BasicButton/BasicButton"
import OrdersTable from './StoresTable/StoresTable'


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
