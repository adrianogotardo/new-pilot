import { BoxStyle, InputStyle } from "./BasicInput.style";

export default function BasicInput({ placeholder, value, setValue, type }) {
    return (
        <BoxStyle>
            <InputStyle
                id="standard-basic"
                label={placeholder}
                variant="standard"
                type={type}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                required
            />
        </BoxStyle>
    )
}