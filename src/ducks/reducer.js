const initialState = {
    user: null,
    loggedIn: false
};

const UPDATE_USER = 'UPDATE_USER'
const LOGOUT = 'LOGOUT'
const UPDATE_ADMIN = 'ADMIN'

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case UPDATE_USER:
            return {...state, username: action.payload}
        case UPDATE_ADMIN: 
            return {...state, username: action.payload}
        case LOGOUT: 
            return initialState;
        default:
            return state
    }
}

export function updateUser(user) {
    return {
        type: UPDATE_USER,
        payload: user
    };
}

export function logout() {
    return {
        type: LOGOUT
    }
}