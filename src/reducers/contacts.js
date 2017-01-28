export default function contacts(state = [], action) {
    switch (action.type) {
        case 'ADD_CONTACT': {
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    email: action.email,
                    favourite: false,
                },
            ];
        }

        case 'TOGGLE_FAVOURITE': {
            return state.map(contact => {
                if (contact.id !== action.id) {
                    return contact;
                }

                return {
                    ...contact,
                    favourite: !contact.favourite,
                };
            });
        }

        default: {
            return state;
        }
    }
}
