import { create } from "zustand";
import { toast } from "react-toastify";
import { AddEntryType, EntryType, UpdateEntryType } from "../type/entry";
import useAuth from "./useAuth";
import entryServices from "../services/entryServices";

type EntryState = {
  entries: EntryType[];
  setEntries: (entries: EntryType[]) => void;
  fetchingEntries: boolean;
  entriesFetched: boolean;
  getAllEntries: () => void;
  resetEntryState: () => void;
  addEntry: (payload: AddEntryType) => void;
  addingEntry: boolean;
  entryAdded: boolean;
  updateEntry: (payload: UpdateEntryType) => void;
  updatingEntry: boolean;
  entryUpdated: boolean;
  deleteEntry: (entryId: string) => void;
  deletingEntry: boolean;
  entryDeleted: boolean;
};

const useEntry = create<EntryState>((set) => ({
  entries: [],
  setEntries: (entries: EntryType[]) => {
    set((state) => ({ entries: (state.entries = entries) }));
  },
  fetchingEntries: false,
  entriesFetched: false,
  addingEntry: false,
  entryAdded: false,
  updatingEntry: false,
  entryUpdated: false,
  deletingEntry: false,
  entryDeleted: false,

  getAllEntries: async () => {
    const { setEntries } = useEntry.getState();
    const { user } = useAuth.getState();
    try {
      set((state) => ({ fetchingEntries: (state.fetchingEntries = true) }));
      const entries = await entryServices.getAllEntries(user?.token || "");
      setEntries(entries);
      set((state) => ({ fetchingEntries: (state.fetchingEntries = false) }));
      set((state) => ({ entriesFetched: (state.entriesFetched = true) }));
    } catch (error: any) {
      set((state) => ({ fetchingEntries: (state.fetchingEntries = false) }));
      toast.error(error.response.data.message);
    }
  },

  addEntry: async (payload: AddEntryType) => {
    const { entries, setEntries } = useEntry.getState();
    const { user } = useAuth.getState();
    try {
      set((state) => ({ addingEntry: (state.addingEntry = true) }));
      const response = await entryServices.addEntry(payload, user?.token || "");
      const newEntries = [response, ...entries];
      setEntries(newEntries);
      set((state) => ({ addingEntry: (state.addingEntry = false) }));
      set((state) => ({ entryAdded: (state.entryAdded = true) }));
      toast.success("Entry added successfully");
    } catch (error: any) {
      set((state) => ({ addingEntry: (state.addingEntry = false) }));
      toast.error(error.response.data.message);
    }
  },

  updateEntry: async (payload: UpdateEntryType) => {
    const { entries, setEntries } = useEntry.getState();
    const { user } = useAuth.getState();
    try {
      set((state) => ({ updatingEntry: (state.updatingEntry = true) }));
      const response = await entryServices.updateEntry(
        payload,
        user?.token || ""
      );
      const entryIndex = entries.findIndex((entry) => entry._id === payload.id);
      if (entryIndex === -1) {
        throw new Error("Entry not found");
      }
      if (entryIndex !== -1) {
        const updatedEntries = [...entries];
        updatedEntries[entryIndex] = {
          ...updatedEntries[entryIndex],
          ...response,
        };
        setEntries(updatedEntries);
        set((state) => ({ updatingEntry: (state.updatingEntry = false) }));
        set((state) => ({ entryUpdated: (state.entryUpdated = true) }));
        toast.success("Entry updated successfully");
      }
    } catch (error: any) {
      set((state) => ({ updatingEntry: (state.updatingEntry = false) }));
      toast.error(error.response.data.message);
    }
  },

  deleteEntry: async (entryId: string) => {
    const { entries, setEntries } = useEntry.getState();
    const { user } = useAuth.getState();
    try {
      set((state) => ({ deletingEntry: (state.deletingEntry = true) }));
      await entryServices.deleteEntry(entryId, user?.token || "");
      const newEntries = entries.filter((entry) => entry._id !== entryId);
      setEntries(newEntries);
      set((state) => ({ deletingEntry: (state.deletingEntry = false) }));
      set((state) => ({ entryDeleted: (state.entryDeleted = true) }));
      toast.success("Entry deleted successfully");
    } catch (error: any) {
      set((state) => ({ deletingEntry: (state.deletingEntry = false) }));
      toast.error(error.response.data.message);
    }
  },

  resetEntryState: () => {
    set((state) => ({ fetchingEntries: (state.fetchingEntries = false) }));
    set((state) => ({ entriesFetched: (state.entriesFetched = false) }));

    set((state) => ({ addingEntry: (state.addingEntry = false) }));
    set((state) => ({ entryAdded: (state.entryAdded = false) }));

    set((state) => ({ updatingEntry: (state.updatingEntry = false) }));
    set((state) => ({ entryUpdated: (state.entryUpdated = false) }));

    set((state) => ({ deletingEntry: (state.deletingEntry = false) }));
    set((state) => ({ entryDeleted: (state.entryDeleted = true) }));
  },
}));

export default useEntry;
