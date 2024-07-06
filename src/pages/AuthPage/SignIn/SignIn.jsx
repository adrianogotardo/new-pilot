import { useContext, useState } from "react";
import BasicInput from "../../../components/LegacyUI/BasicInput/BasicInput";
import { ContainerSection, TitleStyle } from "../AuthPage.style";
import { LoginIconStyle } from "./SignIn.style";
import InvisibleButton from "../../../components/LegacyUI/UploadButton/InvisibleButton";
import { postSection } from "../../../api/requests";
import { AuthContext } from "../../../context/AuthContext";

export default function SignIn() {

    const { setUserData } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();

        const body = { email, password };
        const token = await postSection(body);

        if (token) setUserData({ token: token });
    }

    return (
        <ContainerSection onSubmit={(e) => handleSubmit(e)}>
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
            <InvisibleButton type='submit'>
                <LoginIconStyle />
            </InvisibleButton>
        </ContainerSection>
    );
}