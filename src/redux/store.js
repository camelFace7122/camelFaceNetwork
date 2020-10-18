import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
    _state: {
        dialogsPage: {
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
            currentText: '',
        },
    
        profilePage: {
            posts: [
                { id: 1, message: 'This is the main event of the evening!', likesCount: '0' },
                { id: 2, message: 'Wow, is it me?', likesCount: '15' },
                { id: 3, message: 'Catch me, if you can, man', likesCount: '329' },
            ],
            currentText: '',
        },
    
        sidebar: {
            friends: [
                { id: 1, friend: 'Zhalgas', avatar: 'https://pbs.twimg.com/profile_images/913861131005022209/iaBdZZn1.jpg' },
                { id: 2, friend: 'Erkanat', avatar: 'https://demotivation.ru/wp-content/uploads/2020/05/1463056020_205639_1463060534_noticia_normal_recorte1-1.jpg' },
                { id: 3, friend: 'Maya', avatar: 'https://dropi.ru/img/uploads/2017-10-25/1_original.jpeg' },
            ]
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        
        this._callSubscriber(this._state);        
    }
}

window.store = store;


// export const subscribe = (observer) => {
//     rerenderEntireTree = observer;
// }

export default store;