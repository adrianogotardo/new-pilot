import ContainerGrid from "../Grid/ContainerGrid/ContainerGrid";
import GridItem from "../Grid/GridItem/GridItem"
import { Card } from "./PageCard.style";

export default function PageCard({ children }) {
    return (
        <ContainerGrid spacing={2} columns={5}>
            <GridItem columns={5}>
                <Card>
                    {children}
                </Card>
            </GridItem>
        </ContainerGrid>
    );
}
