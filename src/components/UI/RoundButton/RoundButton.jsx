import { RoundButtonStyle } from "./RoundButton.style";

export default function RoundButton({ children, action, transparent }) {
    return (
        <RoundButtonStyle onClick={action} transparent={transparent}>
            {children}
        </RoundButtonStyle>
    )
}