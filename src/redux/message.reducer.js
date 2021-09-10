export const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT"
export const SEND_MESSAGE = "SEND_MESSAGE"

let messagePage = {
    messageData: [
        {
            id: 1,
            message: "Hi"
        },
        {
            id: 2,
            message: "How is you"
        },
        {
            id: 3,
            message: "Yo"
        },
    ],
    dialogsData: [
        {
            name: "Denys",
            id: 1
        },
        {
            name: "Darya",
            id: 2
        },
        {
            name: "Alex",
            id: 3
        },
        {
            name: "Andrey",
            id: 4
        },
        {
            name: "Ihor",
            id: 5
        },
    ],
    newMessageText: ""
}

const messageReducer = (state = messagePage, action) => {
    // let stateCopy = {
    //     ...state,
    //     // message:[...state.message]
    // }

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {...state, newMessageText: action.body}
        // stateCopy.newMessageText = action.body
        // return stateCopy
        case SEND_MESSAGE:
            const body = state.newMessageText
            return {
                ...state,
                newMessageText: "",
                messageData:[...state.messageData,{id: 9, message: body}]
            }
        // const body = stateCopy.newMessageText
        // stateCopy.newMessageText = ""
        // stateCopy.messageData.push({id: 9, message: body})
        // return stateCopy
        default:
            return state
    }
}
export default messageReducer

export const sendMessageCreator = () => ({type: SEND_MESSAGE,})
export const updateMessageBodyCreator = (newMessage) => (
    {
        type: UPDATE_NEW_MESSAGE_TEXT,
        body: newMessage,
    }
)
