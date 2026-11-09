import { create } from "zustand";
const useMessageStore = create((set => ({
    messages: [],
    getMessages:async (own = false) => {
        try {
            const res = own ? api.getMyMessages() : await api.getMessages()
            set({ messages: res.data})
        } catch (error) {
            console.error(error)
        }
    }
}))