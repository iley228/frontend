const MessageCard = ({ likes, content, username, createdAt, id }) => {
    const {getMessages} = useMessageStore()
    const handleDelete = async () => {
        await api.deleteMessage(id)
        getMessages()
        }
        const handleLike = async () => {
        }
        const handleReport = async () =>{
        }
    return (
        <div className="message-card">
            <div className="message-content">{content}</div>
            <div className="message-meta">
                <span className="message-author">@{username}</span>
                <span className="message-time">{createdAt}</span>
            </div>
            <div className="message-actions">
                <button className="action-button">
                    <span>{likes} 💗🤍</span>
                    <span>Нравится</span>
                </button>
                <button className="action-button">
                    <span>🚩</span>
                    <span>Пожаловаться</span>
                </button>
                <button className="action-button delete">
                    <span>❌</span>
                    <span>Удалить</span>
                </button>
            </div>
        </div>
    )
}

export default MessageCard
