import axios, { AxiosError } from 'axios';

const token: string = 'EAAGNJ7pLQgYBOzgTYLr7rsy76rOpNGqhVwONcURdq6aHHeZCCPFNCaqR6wJJf49lgW1yVEfEfYZCwrqT287kgoioH86uGdodeFxxpAcNxYDXRyewO1ZAZBscZBsnXzVAHmDgIKgeZCDpHE1bZCtpfDMHpSB8kxqof17uKgHYTzqDFLO0ZC2GFfkVMr8OU3zhlzZAK';
const url: string = 'https://graph.facebook.com/v18.0/281359691720295/messages';


export const sendMessage = (phone: string, register: string) => {
    const body = {
        messaging_product: "whatsapp",
        to: `52${phone}`,
        type: "template",
        template: {
            name: "register_completed",
            language: {
                code: "es_MX"
            },
            components: [
                {
                    type: "body",
                    parameters: [
                        {
                            type: "text",
                            text: `TF${register}`
                        }
                    ]
                }
            ]
        }
    }

    axios.post(url, body, {
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    }).then().catch(err => {
        throw new Error('Error al enviar mensaje de WhatsApp: ', err);
    });
}