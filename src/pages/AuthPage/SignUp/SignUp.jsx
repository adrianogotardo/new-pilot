import { useState } from "react";
import { ContainerSection, TitleStyle } from "../AuthPage.style";
import BasicInput from "../../../components/LegacyUI/BasicInput/BasicInput";
import { UploadIconStyle } from "./SignUp.style";

export default function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <ContainerSection>
            <TitleStyle>˹Cadastro</TitleStyle>
            <BasicInput
                placeholder='Nome'
                type='text'
                value={name}
                setValue={setName}
            />
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
            <BasicInput
                placeholder='Confirme a senha'
                type='password'
                value={confirmPassword}
                setValue={setConfirmPassword}
            />
            <UploadIconStyle />
        </ContainerSection>
    )
}