import LoginIcon from '@mui/icons-material/Login';
import { styled } from '@mui/material';

export const LoginIconStyle = styled(LoginIcon)`
    color: ${(props) => props.theme.palette.company.golden};
    font-size: 35px;

    margin-top: 25px;

    transition: all 0.5s ease-in-out;

    :hover{
        cursor: pointer;
        filter: brightness(1.3);
    }
`;