import useUser from "@/entitis/UserEntity";
const {getToken} = useUser();

// todo сделать через env или другую систему
const baseUrl = 'http://192.168.0.104:8000';

export const appFetch = async (link: string, requestBody: any = {}) => {
    const token = getToken();
    const headers = {
        'accept': 'application/json',
        'content-type': 'application/json',
    } as any

    if (token) {
        headers['Authorization'] = `Bearer ${token}`
    }

    let response = await fetch(`${baseUrl}/api/${link}`, {
        method: 'POST',
        headers,
        body: JSON.stringify(requestBody),
    });
    return await response.json();
}
