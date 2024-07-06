import { postRequest } from "./requests.utils";
const serverURL = process.env.REACT_APP_SERVER_URL;

export async function postNewUser(body) {
    const endpoint = `${serverURL}/sign/up`;
    await postRequest(endpoint, body, null);
    return;
}

export async function postSection(body) {
    const endpoint = `${serverURL}/sign/in`;
    const res = await postRequest(endpoint, body, null);

    if (!res) return null;

    const token = res.data;

    return token;
}