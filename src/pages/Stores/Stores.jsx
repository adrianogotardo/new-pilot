import { useState } from "react";
import PageCard from "../../components/General/PageCard/PageCard";
import StoresList from "./StoresList/StoresList";
import CreateStore from "./CreateOrder/CreateOrder";

export default function Stores() {
    const [isInCreateOrderPage, setIsInCreateOrderPage] = useState(false);

    return (
        <PageCard>
            {
                isInCreateOrderPage
                    ?
                    <CreateStore isInCreateOrderPage={isInCreateOrderPage} setIsInCreateOrderPage={setIsInCreateOrderPage} />
                    :
                    <StoresList isInCreateOrderPage={isInCreateOrderPage} setIsInCreateOrderPage={setIsInCreateOrderPage} />
            }
        </PageCard>
    );
}
