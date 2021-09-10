import React from 'react';
import {sendMessageCreator, updateMessageBodyCreator} from "../../redux/message.reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return {
        message: state.message,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateMessageBodyCreator: (text) => {
            dispatch(
                updateMessageBodyCreator(text)
            )
        },
        sendMessageCreator: () => {
            dispatch(
                sendMessageCreator()
            )
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
