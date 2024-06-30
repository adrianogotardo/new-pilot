import { useState } from "react";
import BasicInput from "../../../components/LegacyUI/BasicInput/BasicInput";
import { ContainerSection, TitleStyle } from "../AuthPage.style";
import { LoginIconStyle } from "./SignIn.style";

export default function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <ContainerSection>
            <TitleStyle>
                Login˼
            </TitleStyle>
            <BasicInput
                placeholder='Email'
                type='email'
                value={email}
                setValue={setEmail}
            />
            <BasicInput
                placeholder='Senha'
                type='password'
                value={password}
                setValue={setPassword}
            />
            <LoginIconStyle />
        </ContainerSection>
    )
}