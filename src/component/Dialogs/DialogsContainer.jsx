import React from 'react';
import {sendMessageCreator, updateMessageBodyCreator} from "../../redux/message.reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = (props) => {
    // let state = props.store.getState().message
    //
    // const onSendMessage = () => {
    //     props.store.dispatch(
    //         sendMessageCreator()
    //     )
    // }
    // const onNewMessageText = (text) => {
    //     props.store.dispatch(
    //         updateMessageBodyCreator(text)
    //     )
    // }

    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().message

                const onSendMessage = () => {
                    store.dispatch(
                        sendMessageCreator()
                    )
                }
                const onNewMessageText = (text) => {
                    store.dispatch(
                        updateMessageBodyCreator(text)
                    )
                }
                return (
                    <Dialogs
                        updateMessageBodyCreator={onNewMessageText}
                        sendMessageCreator={onSendMessage}
                        message={state}
                    />
                )
            }
        }
        </StoreContext.Consumer>

    );
};

export default DialogsContainer;
