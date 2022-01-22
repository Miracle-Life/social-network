export const SEND_MESSAGE = "message/SEND_MESSAGE"

type messageType = {
    id: number,
    message: string
}
type dialogsDataType = {
    name: string,
    id: number
}

let messagePage = {
    messageData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ] as Array<messageType>,
    dialogsData: [
        {name: "Denys", id: 1},
        {name: "Darya", id: 2},
        {name: "Alex", id: 3},
        {name: "Andrey", id: 4},
        {name: "Ihor", id: 5},
    ] as Array<dialogsDataType>,
}
export type messagesPageType = typeof messagePage;

const messageReducer = (state = messagePage, action: any): messagesPageType => {

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

type sendMessageCreatorActionType = {
    type: typeof SEND_MESSAGE,
    newMessageText: string
}

export const sendMessageCreator = (newMessageText: string): sendMessageCreatorActionType => ({
    type: SEND_MESSAGE,
    newMessageText
})

export default messageReducer
