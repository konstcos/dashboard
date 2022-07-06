import useUser from "@/entitis/UserEntity";
const {getToken} = useUser();

const baseUrl = process.env.VUE_APP_API_URL as string;

export const appFetch = async (link: string, requestBody: any = {}) => {

    const apiBaseUrl = baseUrl.trim() === '' ? '/api' : `${baseUrl.trim()}/api`

    const token = getToken();
    const headers = {
        'accept': 'application/json',
        'content-type': 'application/json',
    } as any

    if (token) {
        headers['Authorization'] = `Bearer ${token}`
    }

    let response = await fetch(`${apiBaseUrl}/${link}`, {
        method: 'POST',
        headers,
        body: JSON.stringify(requestBody),
    });
    return await response.json();
}
