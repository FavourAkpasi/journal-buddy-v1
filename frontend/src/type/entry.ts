export type EntryType = {
    _id: string;
    title: string;
    text: string;
    createdAt: string;
    updatedAt: string;
    userId: string;
};

export type AddEntryType = {
    title?: string;
    text: string;
};

export type UpdateEntryType = {
    id: string;
    title?: string;
    text: string;
};

export type DeleteEntryType = {
    id: string;
};

