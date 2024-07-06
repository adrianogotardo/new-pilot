import axios from 'axios';
import { toast } from 'react-toastify'
import { errorHandler, successHandler } from './responseHandler';

function getTimeZone() {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return timeZone;
}

function createConfig(token) {
    const timeZone = getTimeZone();
    const config = { headers: {} };

    config.headers['time-zone'] = timeZone;
    if (token) config.headers['Authorization'] = `Bearer ${token}`;

    return config
}

export async function postRequest(endpoint, body, token) {
    const config = createConfig(token);

    try {
        const res = await axios.post(endpoint, body, config);
        const message = successHandler(res.status)
        toast.success(message);

        return res;
    }
    catch (err) {
        const message = errorHandler(err.response?.status);
        toast.error(message);

        return null;
    }
}

