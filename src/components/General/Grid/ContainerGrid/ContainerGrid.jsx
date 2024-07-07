import { Box, Grid } from "@mui/material";
import { BoxStyle } from "./ContainerGrid.style";

export default function ContainerGrid({ flexGrow, spacing, columns, children }) {
    return (
        <BoxStyle flexGrow={1} >
            <Grid container spacing={spacing} columns={columns}>
                {children}
            </Grid>
        </BoxStyle>
    );
}