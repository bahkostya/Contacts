export default function layout(state = 'LIST_VIEW', action) {
    switch (action.type) {
        case 'SET_LAYOUT': {
            return action.layout;
        }

        default: {
            return state;
        }
    }
}
