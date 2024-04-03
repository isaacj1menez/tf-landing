import axios, { AxiosResponse } from 'axios';

const baseUrl: string = 'https://tf-camp-api.onrender.com/api/campers';

const addCamper = async (body: {}): Promise<boolean> => {
    try {
        const response: AxiosResponse = await axios.post(baseUrl, body);
        if(response.data.status === "success"){
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}

const getCampers = async () => {
    const campers = await axios.get(baseUrl);
    if(campers.data.status === "success") {
        return campers.data.data;
    } else {
        return {};
    }
}

export {
    addCamper,
    getCampers
}