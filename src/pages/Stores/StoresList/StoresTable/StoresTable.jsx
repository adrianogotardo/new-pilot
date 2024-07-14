import { ordersAPIMock } from "../../Stores.mock";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function StoresTable() {

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
                                const lastTitle = index === tableTitles.length - 1;
                                return (
                                    <TableCell key={index} sx={{ color: 'primary.light' }} align={lastTitle ? 'right' : 'left'}>
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