/*
 * The reducer takes care of state changes in our app through actions
 */
import {
    FETCH_TWEETS_REQUEST,
    FETCH_TWEETS_REQUEST_SUCCESS,
    FETCH_TWEETS_REQUEST_ERROR,
    RESET_TWEETS_REQUEST,
    CLEAR_FETCH_TWEETS_REQUEST_ERROR,
} from '../actions/constants'

// The initial application state
let initialState = {
    userName: '',
    tweets: [],
    error: '',
    loading: false,
}

// Takes care of changing the application state
function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_TWEETS_REQUEST:
            return { ...state, userName: action.userName, loading: true }
        case FETCH_TWEETS_REQUEST_ERROR:
            return { ...state, error: action.error, loading: false }
        case FETCH_TWEETS_REQUEST_SUCCESS:
            return { ...state, tweets: action.payload, loading: false }
        case RESET_TWEETS_REQUEST:
            return { ...state, tweets: [], userName: '' }
        case CLEAR_FETCH_TWEETS_REQUEST_ERROR:
            return { ...state, error: '' }
        default:
            return state
    }
}

export default reducer
