'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const Logout = () => {
    const router = useRouter();
    useEffect(() => {
        const logout = () => {
            localStorage.removeItem("token");
            router.push('/');
        }

        logout();
    }, [])


    return (
        <div>Logging out...</div>
    )
}

export default Logout