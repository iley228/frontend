import { useEffect } from "react"
import { useUserStore } from "../store/useUserStore"
import { useNavigate } from "react-router-dom"

export const AuthGuard = ({children}) => {
    const {user} = useUserStore()
    const Navigate = useNavigate()

    useEffect(() => {
        if (!user?.token) Navigate("/signin")
    }, [])
    if (!user?.token) return <></>
    return children

}