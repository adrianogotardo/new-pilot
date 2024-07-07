import { ordersMock } from "../Orders.mock";
import { Table } from "./OrdersTable.style";

export default function OrdersTable() {
    return (
        <Table>
            {
                ordersMock.map((order) => {
                    return (
                        <div>
                            <span>{order.id}</span> -
                            <span>{order.item}</span> -
                            <span>{order.constructionSite}</span> -
                            <span>{order.store}</span> -
                            <span>{order.value}</span> -
                            <span>{order.date}</span> -
                        </div>
                    );
                })
            }
        </Table>
    );
}