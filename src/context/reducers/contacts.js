import {
    CREATE_CONTACT_FAIL,
    CREATE_CONTACT_LOADING,
    CREATE_CONTACT_SUCCESS,
    DELETE_CONTACT_FAIL,
    DELETE_CONTACT_LOADING,
    DELETE_CONTACT_SUCCESS,
    GET_CONTACTS_FAIL,
    GET_CONTACTS_LOADING,
    GET_CONTACTS_SUCCESS
} from "../../constants/actionTypes";


//action has most comonly two things type and payload
const contacts = (state, { type, payload }) => {


    switch (type) {

        case DELETE_CONTACT_LOADING: {
            return {
                ...state,
                deleteContact: {
                    ...state.deleteContact,
                    loading: true,
                    error: null
                },
            };
        }

        case DELETE_CONTACT_SUCCESS: {
            return {
                ...state,
                deleteContact: {
                    ...state.deleteContact,
                    loading: false,
                    error: null
                },

                getContacts: {
                    ...state.getContacts,
                    loading: false,
                    data: state.getContacts.data.filter((item) => item.id !== payload)

                }
            };
        }

        case DELETE_CONTACT_FAIL: {
            return {
                ...state,
                deleteContact: {
                    ...state.deleteContact,
                    loading: false,
                    error: null
                },
            };
        }

        case CREATE_CONTACT_LOADING:
            return {
                ...state,
                createContact: {
                    ...state.createContact,
                    loading: true,
                    error: null,
                },
            };

        case CREATE_CONTACT_SUCCESS:
            return {
                ...state,
                createContact: {
                    ...state.createContact,
                    loading: false,
                    error: null,
                    data: payload,
                },

                getContacts: {
                    ...state.getContacts,
                    loading: false,
                    data: [payload, ...state.getContacts.data],
                    error: null,
                },
            };

        case CREATE_CONTACT_FAIL:
            return {
                ...state,
                createContact: {
                    ...state.createContact,
                    loading: false,
                    error: payload,
                },
            };

        case GET_CONTACTS_LOADING:
            return {
                ...state,
                getContacts: {
                    ...state.getContacts,
                    loading: true,
                    error: null,
                }
            };

        case GET_CONTACTS_SUCCESS:
            return {
                ...state,
                getContacts: {
                    ...state.getContacts,
                    loading: false,
                    data: payload,
                    error: null,
                }
            };

        case GET_CONTACTS_FAIL:
            return {
                ...state,
                getContacts: {
                    ...state.getContacts,
                    loading: false,
                    error: payload,
                }
            };

        default:
            return state;
    }

}

export default contacts;