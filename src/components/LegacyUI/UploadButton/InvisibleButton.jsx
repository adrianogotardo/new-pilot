import { InvisibleButtonStyle, UploadIconStyle } from "./InvisibleButton.style";

export default function InvisibleButton({ children, type }) {
    return (
        <InvisibleButtonStyle type={type ? type : ''}>
            {children}
        </InvisibleButtonStyle>
    );
}