import {sendMessageCreator, updateMessageBodyCreator} from "../../redux/message.reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    // debugger
    return {
        message: state.message,
        // newMessageText: state.message.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateMessageBodyCreator: (text) => {
            dispatch(updateMessageBodyCreator(text))
        },
        sendMessageCreator: () => {
            dispatch(sendMessageCreator())
        }
    }
}


//HOC
// let AuthRedirectComponent = withAuthRedirect(Dialogs)

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
