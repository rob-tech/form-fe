export default function (state = {}, action) {
    switch (action.type) {
        case "EXPERIENCES":
            return {
                ...state,
               allExperiences: state.allExperiences.concat(action.payload)
            };

        case "ADD_EXPERIENCE":
            return {
                ...state,
                experience: action.payload
            };

        default:
            return state;
    }
}