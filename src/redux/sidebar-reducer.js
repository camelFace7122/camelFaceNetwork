
let initialState = {
    friends: [
        { id: 1, friend: 'Zhalgas', avatar: 'https://pbs.twimg.com/profile_images/913861131005022209/iaBdZZn1.jpg' },
        { id: 2, friend: 'Erkanat', avatar: 'https://demotivation.ru/wp-content/uploads/2020/05/1463056020_205639_1463060534_noticia_normal_recorte1-1.jpg' },
        { id: 3, friend: 'Maya', avatar: 'https://dropi.ru/img/uploads/2017-10-25/1_original.jpeg' },
    ]
};

const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
    }
    return state;
}

export default sidebarReducer;
