import { create } from "zustand";
import messageServices from "../services/messageServices";
import { AddMessageType, MessageType } from "../type/message";
import { toast } from "react-toastify";

type MessageState = {
  messages: MessageType[];
  setMessages: (messages: MessageType[]) => void;
  fetchingMessages: boolean;
  messagesFetched: boolean;
  getAllMessages: (entryId : string) => void;
  resetMessageState: () => void;
  addMessage: (payload: AddMessageType) => void;
  addingMessage: boolean;
  messageAdded: boolean;
};

const useMessage = create<MessageState>((set) => ({
  messages: [],
  setMessages: (messages: MessageType[]) => {
    set((state) => ({ messages: (state.messages = messages) }));
  },
  fetchingMessages: false,
  messagesFetched: false,
  addingMessage: false,
  messageAdded: false,

  getAllMessages: async (entryId: string) => {
    const { setMessages } = useMessage.getState();
    try {
      set((state) => ({ fetchingMessages: (state.fetchingMessages = true) }));
      const messages = await messageServices.getAllMessages(entryId);
      setMessages(messages);
      set((state) => ({ fetchingMessages: (state.fetchingMessages = false) }));
      set((state) => ({ messagesFetched: (state.messagesFetched = true) }));
    } catch (error: any) {
      set((state) => ({ fetchingMessages: (state.fetchingMessages = false) }));
      toast.error(error.response.data.message);
    }
  },

  addMessage: async (payload: AddMessageType) => {
    const { messages, setMessages } = useMessage.getState();
    try {
      set((state) => ({ addingMessage: (state.addingMessage = true) }));
      const response = await messageServices.addMessage(payload);
      const newMessages = [...messages, response];
      setMessages(newMessages);
      set((state) => ({ addingMessage: (state.addingMessage = false) }));
      set((state) => ({ messageAdded: (state.messageAdded = true) }));
    } catch (error: any) {
      set((state) => ({ addingMessage: (state.addingMessage = false) }));
      toast.error(error.response.data.message);
    }
  },

  resetMessageState: () => {
    set(() => ({
      messages: [],
      fetchingMessages: false,
      messagesFetched: false,
      addingMessage: false,
      messageAdded: false,
    }));
  },
}));

export default useMessage;
