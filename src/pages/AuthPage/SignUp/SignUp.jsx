import { useState } from "react";
import { ContainerSection, TitleStyle } from "../AuthPage.style";
import BasicInput from "../../../components/LegacyUI/BasicInput/BasicInput";
import { UploadIconStyle } from "./SignUp.style";
import InvisibleButton from "../../../components/LegacyUI/UploadButton/InvisibleButton";
import { toast } from "react-toastify";
import { postNewUser } from "../../../api/requests";

export default function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();

        if (password !== confirmPassword) {
            toast.error("As senhas devem coincidir");
            return;
        }

        const body = { name, email, password };
        postNewUser(body);
    }

    return (
        <ContainerSection onSubmit={(e) => handleSubmit(e)}>
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
            <InvisibleButton type="submit">
                <UploadIconStyle />
            </InvisibleButton>
        </ContainerSection>
    )
}