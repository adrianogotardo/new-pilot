import ContainerGrid from "../../components/General/Grid/ContainerGrid/ContainerGrid";
import GridItem from "../../components/General/Grid/GridItem/GridItem";
import PageCard from '../../components/General/PageCard/PageCard';
import SectionCard from "../../components/General/SectionCard/SectionCard";

export default function Dashboard() {
    return (
        <PageCard>
            <ContainerGrid flexGrow={1} spacing={2} columns={5}>
                <GridItem columns={5} >
                    <SectionCard height={'200px'} />
                </GridItem>
                <GridItem columns={2} >
                    <SectionCard height={'200px'} />
                </GridItem>
                <GridItem columns={3} >
                    <SectionCard height={'200px'} />
                </GridItem>
                <GridItem columns={3} >
                    <SectionCard height={'700px'} />
                </GridItem>
                <GridItem columns={2} >
                    <SectionCard height={'700px'} />
                </GridItem>
            </ContainerGrid>
        </PageCard>
    );
}