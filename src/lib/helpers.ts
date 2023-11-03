import axios from "axios"

export const checkSession = async () => {
    try {
        const temp_token = localStorage.getItem('temp_token');
        if(!temp_token) return false;


        const result = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/`, {
            headers: {
                'Authorization': `Bearer ${temp_token}`
            }
        });

        if (result.status === 200) return true;
    } catch (error: any) {
        console.log(error);
        return false;
    }
}