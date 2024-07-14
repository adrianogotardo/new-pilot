
import { TextContainer, TextFieldStyle } from './BasicInput.style';

export default function BasicInput({ placeholder, value, setValue, type, height, width }) {
    return (
        <TextContainer width={width}>
            <TextFieldStyle
                id="outlined-basic"
                label={placeholder}
                variant="outlined"
                type={type}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                height={height ? height : '30px'}
            />
        </TextContainer>
    );
}