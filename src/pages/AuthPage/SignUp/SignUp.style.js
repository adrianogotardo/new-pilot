import UploadIcon from '@mui/icons-material/Upload';
import { styled } from '@mui/material';

export const UploadIconStyle = styled(UploadIcon)`
    color: ${(props) => props.theme.palette.company.golden};
    font-size: 35px;

    margin-top: 25px;

    transition: all 0.5s ease-in-out;

    :hover{
        cursor: pointer;
        filter: brightness(1.3);
    }
`;