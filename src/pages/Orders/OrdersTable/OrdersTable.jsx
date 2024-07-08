import { ordersAPIMock } from "../Orders.mock";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function OrdersTable() {

    const tableTitles = ["Pedido", "Obra", "Loja", "Valor", "Data", "Icons"];

    function createData(name, workingSiteName, storeName, value, createdAt, icon) {
        return { name, workingSiteName, storeName, value, createdAt, icon };
    }

    const rows = ordersAPIMock.map((order) => {
        const formatedValue = `R$ ${(order.value / 100).toFixed(2).replace('.', ',')}`;
        return (
            createData(order.name, order.workingSiteName, order.storeName, formatedValue, order.createdAt, '...')
        )
    })

    return (
        <TableContainer component={Paper} sx={{ marginTop: '10px' }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow sx={{ backgroundColor: 'company.golden' }}>
                        {
                            tableTitles.map((title, index) => {
                                const lastTitle = index == tableTitles.length - 1;
                                return (
                                    <TableCell sx={{ color: 'primary.light' }} align={lastTitle ? 'right' : ''}>
                                        {title}
                                    </TableCell>
                                );
                            })
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell >{row.workingSiteName}</TableCell>
                            <TableCell>{row.storeName}</TableCell>
                            <TableCell>{row.value}</TableCell>
                            <TableCell>{row.createdAt}</TableCell>
                            <TableCell align="right">{row.icon}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

/*     return (
        <Table>
            <div>
                <span>Pedido</span>
                <span>Obra</span>
                <span>Loja</span>
                <span>Valor</span>
                <span>Data</span>
                <span>U [ ]</span>
            </div>
            {
                ordersAPIMock.map((order) => {
                    return (
                        <div>
                            <span>{order.id}</span> -
                            <span>{order.name}</span> -
                            <span>{order.workingSiteName}</span> -
                            <span>{order.storeName}</span> -
                            <span>{order.value}</span> -
                            <span>{order.date}</span> -
                        </div>
                    );
                })
            }
        </Table>
    ); */