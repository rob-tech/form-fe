export default function(state = {}, action) {
    switch (action.type) {
      case "ERR_MSG":
        console.log(action.payload)
        return {
          ...state,
            errMessage: action.payload.errMessage,
            succMessage: action.payload.succMessage
        }
        // case "SUCCESS_MSG":
        //   return {
        //     ...state,
        //       succMessage: action.payload
        
        //   }
        default:
          return state;
    }
}