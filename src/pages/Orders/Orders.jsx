import { useState } from "react";
import PageCard from "../../components/General/PageCard/PageCard";
import OrdersList from "./OrdersList/OrdersList";
import CreateOrder from "./CreateOrder/CreateOrder";

export default function Orders() {
    const [isInCreateOrderPage, setIsInCreateOrderPage] = useState(false);

    return (
        <PageCard>
            {
                isInCreateOrderPage
                    ?
                    <CreateOrder isInCreateOrderPage={isInCreateOrderPage} setIsInCreateOrderPage={setIsInCreateOrderPage} />
                    :
                    <OrdersList isInCreateOrderPage={isInCreateOrderPage} setIsInCreateOrderPage={setIsInCreateOrderPage} />
            }
        </PageCard>
    );
}
