import { ButtonStyle } from "./BasicButton.style";

export default function BasicButton({ children, danger, action, type }) {
    return (
        <ButtonStyle danger={!!danger} onClick={action} type={type}>
            {children}
        </ButtonStyle>
    );
}