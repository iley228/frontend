import Feed from '../components/Feed'
import MessageField from "../components/MessageField"
import { useMessageStore } from "../store/useMessageStore"
import { useUserStore } from "../store/useUserStore"
import { useEffect, useState } from "react"

const MyMessages = () => {
    const {messages, getMessages} = useMessageStore()
    const { user } = useUserStore()
    const [isLoading,setIsLoading] = useState(false)
    const [error, setError] = useState(null)
       useEffect(() => {
        const load = async () => {
        setError(null)
        setIsLoading(true)
        try{
        await getMessages(true)
    } catch (error) {
        console.error(error)
        setError(error.message)
    } finally {
    setIsLoading(false)
    }
    
    }
    load()
    }, [])

     return (
        <>
            <h1>Board</h1>

            {isLoading && <p>Загрузка...</p>}
            {error && <p>{error}</p>}
            {messages.length > 0 && (
            <Feed messages={messages} title="Мои сообщения" />
            )}
            </>
    )
}
export default MyMessages
