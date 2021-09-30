import {sendMessageCreator} from "../../redux/message.reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {

    return {
        message: state.message,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessageCreator: (newMessageText) => {
            dispatch(sendMessageCreator(newMessageText))
        }
    }
}


//HOC
// let AuthRedirectComponent = withAuthRedirect(Dialogs)

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    // withAuthRedirect
)(Dialogs)
