const ADD_MESSAGE = 'dialogsPage/ADD_MESSAGE';

let initialState = {
    messages: [
        { id: 1, message: 'Each day i will ....' },
        { id: 2, message: 'My new variable ....' },
        { id: 3, message: 'easy money' },
    ],
    dialogs: [
        { id: 1, name: 'Aslan' },
        { id: 2, name: 'Rachel' },
        { id: 3, name: 'Gus' },
        { id: 4, name: 'Artur' },
        { id: 5, name: 'Luke' },
    ],
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages,  {id: 4, message: action.message,}]
            }        
        default:
            return state;
    }
}

export let addMessageAC = (message) => {
    return {
        type: 'ADD_MESSAGE',
        message,
    }
}

export default dialogsReducer;
