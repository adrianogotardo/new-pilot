import { CardStyle } from "./SectionCard.style";

export default function SectionCard({ children, height }) {
    return (
        <CardStyle height={height}>
            {children}
        </CardStyle>
    );
}