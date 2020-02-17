export default function (state = {}, action) {
    switch (action.type) {
        case "USER":
            return {
                ...state,
               user: action.payload,
               token: action.payload
            };
            case "NEW_USER":
            return {
                ...state,
               newUser: action.payload,
            };
        default:
            return state;
    }
}