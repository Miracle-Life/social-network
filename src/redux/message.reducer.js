export const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT"
export const SEND_MESSAGE = "SEND_MESSAGE"

let messagePage = {
    messageData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ],
    dialogsData: [
        {name: "Denys", id: 1},
        {name: "Darya", id: 2},
        {name: "Alex", id: 3},
        {name: "Andrey", id: 4},
        {name: "Ihor", id: 5},
    ],
    newMessageText: ""
}

const messageReducer = (state = messagePage, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {...state, newMessageText: action.body}
        case SEND_MESSAGE:
            let body = state.newMessageText;
            return {
                ...state,
                newMessageText: "",
                messageData: [...state.messageData, {id: 9, message: body}],
            }
        default:
            return state
    }
}


export const sendMessageCreator = () => ({type: SEND_MESSAGE,})
export const updateMessageBodyCreator = (newMessage) => (
    {
        type: UPDATE_NEW_MESSAGE_TEXT,
        body: newMessage,
    }
)

export default messageReducer
