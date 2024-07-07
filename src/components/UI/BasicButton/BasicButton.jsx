import { ButtonStyle } from "./BasicButton.style";

export default function BasicButton({ children, danger, action }) {
    return (
        <ButtonStyle danger={!!danger} onClick={action}>
            {children}
        </ButtonStyle>
    );
}