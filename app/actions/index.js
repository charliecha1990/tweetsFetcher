/*
 * Actions describe changes of state in your application
 */

// We import constants to name our actions' type
import {
    FETCH_TWEETS_REQUEST,
    FETCH_TWEETS_REQUEST_SUCCESS,
    FETCH_TWEETS_REQUEST_ERROR,
    RESET_TWEETS_REQUEST,
} from './constants'

/**
 * Fire the fetch tweets request
 * @param  {string} userName Username of twitter tweets that we wanna retrieve
 */
export function fetchTweetsRequest(userName) {
    return { type: FETCH_TWEETS_REQUEST, userName }
}

/**
 * Feed redux tweets if with fetch request success
 * @param  {array} tweets The list of tweets that we get from the endpoint
 */
export function fetchTweetsRequestSuccess(tweets) {
    return { type: FETCH_TWEETS_REQUEST_SUCCESS, payload: tweets }
}

/**
 * Set the `error` state to the error received
 * @param  {string} error The error we got when trying to make the request
 */
export function fetchTweetsRequestError(error) {
    return { type: FETCH_TWEETS_REQUEST_ERROR, error }
}

/**
 * Reset the `error` state to the error received
 */
export function resetTweetsRequest() {
    return { type: RESET_TWEETS_REQUEST }
}
