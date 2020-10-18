import profileReducer, { addPost, deletePost } from './profile-reducer';

let state = {
    posts: [
        { id: 1, message: 'This is the main event of the evening!', likesCount: '0' },
        { id: 2, message: 'Wow, is it me?', likesCount: '15' },
        { id: 3, message: 'Catch me, if you can, man', likesCount: '329' },
    ],
    profile: null,
    status: '',
};

it('length of posts should be incremented', () => {
    let action = addPost('stronger faster higher');

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(4);
}) 


it('message property of posts should have expected value', () => {
    let action = addPost('stronger faster higher');

    let newState = profileReducer(state, action);

    expect(newState.posts[3].message).toBe('stronger faster higher');
}) 

it('after deleting length of posts should be decremented', () => {
    let action = deletePost(1);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(2);
}) 

it('after deleting length of posts should not be decremented if id is incorrect', () => {
    let action = deletePost(1000);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
})

