export const addContact = (name, email) => ({
    type: 'ADD_CONTACT',
    id: Date.now(),
    name,
    email,
});

export const toggleFavourite = id => ({
    type: 'TOGGLE_FAVOURITE',
    id,
});

export const setFilter = filter => ({
    type: 'SET_FILTER',
    filter,
});

export const setLayout = layout => ({
    type: 'SET_LAYOUT',
    layout,
});
