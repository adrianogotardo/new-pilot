import { GridItemStyle } from "./GridItem.style";

export default function GridItem({ columns, children }) {
    return (
        <GridItemStyle item xs={columns} >
            {children}
        </GridItemStyle>
    );
}