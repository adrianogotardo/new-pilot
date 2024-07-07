import PageCard from "../../components/General/PageCard/PageCard";
import BasicButton from "../../components/UI/BasicButton/BasicButton";
import { ButtonsContainer, TopContainer } from "./Orders.style";
import OrdersTable from "./OrdersTable/OrdersTable";

export default function Orders() {
    return (
        <PageCard>
            <TopContainer>
                <h1>Pedidos</h1>
                <ButtonsContainer>
                    <BasicButton> Config. de busca </BasicButton>
                    <BasicButton> + Adicionar pedido </BasicButton>
                </ButtonsContainer>
            </TopContainer>
            <OrdersTable />
        </PageCard>
    );
}
