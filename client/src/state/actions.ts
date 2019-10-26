import {
    TEST_ACTION,
    TEST_ACTION_RESPONSE,
    GET_DOCUMENT,
    GET_DOCUMENT_RESPONSE,
    ADD_DOCUMENT,
    ADD_DOCUMENT_RESPONSE,
    ADD_ENTRY_TO_DOCUMENT,
    SAVE_DOCUMENT_REQUEST
} from "./actiontypes";

export const testAction = () => ({
    type: TEST_ACTION
});

export const testActionResponse = (payload: any) => ({
    type: TEST_ACTION_RESPONSE,
    payload: payload
});

export const getDocument = (document_id: number) => ({
    type: GET_DOCUMENT,
    document_id: document_id
});

export const getDocumentResponse = (payload: any) => ({
    type: GET_DOCUMENT_RESPONSE,
    payload: payload
});

export const addDocument = (document: any) => ({
    type: ADD_DOCUMENT,
    document: document
});

export const addDocumentResponse = (payload: any) => ({
    type: ADD_DOCUMENT_RESPONSE,
    payload: payload
});

export const addEntryToDocument = ((entry: {documentId: number, content: string}) => ({
    type: ADD_ENTRY_TO_DOCUMENT,
    payload: entry
}));

export const saveDocumentRequest = (document: any) => ({
    type: SAVE_DOCUMENT_REQUEST,
    payload: document
})