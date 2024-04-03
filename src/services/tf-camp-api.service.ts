import axios, { AxiosResponse } from 'axios';

const baseUrl: string = 'https://tf-camp-api.onrender.com/api/';

const addCamper = async (body: {}): Promise<any | null> => {
    try {
        const response: AxiosResponse = await axios.post(`${baseUrl}campers`, body);
        if(response.data.status === "success"){
            return response.data;
        } else {
            return null;
        }
    } catch (error) {
        console.log(error);
        return null;
    }
}

const sendSms = async (to: string, code: string) => {
    try {
        
        const message: string = `Tu código de registro al campamento es ${code}. ¡CONSÉRVALO!`

        const body = {
            to,
            message
        }

        const response: AxiosResponse = await axios.post(`${baseUrl}twilio/sms`, body);
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

export {
    addCamper,
    sendSms
}