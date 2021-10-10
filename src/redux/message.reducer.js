export const SEND_MESSAGE = "message/SEND_MESSAGE"

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
}

const messageReducer = (state = messagePage, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageText;
            return {
                ...state,
                messageData: [...state.messageData, {id: 9, message: body}],
            }
        default:
            return state
    }
}


export const sendMessageCreator = (newMessageText) => ({type: SEND_MESSAGE,newMessageText})

export default messageReducer
