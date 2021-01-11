// This file contains the sagas used for async actions in our app. It's divided into
// "effects" that the sagas call (`authorize` and `logout`) and the actual sagas themselves,
// which listen for actions.

// Sagas help us gather all our side effects (network requests in this case) in one place

import { hashSync } from 'bcryptjs'
import axios from 'axios'
import { take, call, put, fork, race } from 'redux-saga/effects'
import auth from '../api'

import {
    FETCH_TWEETS_REQUEST,
    RESET_TWEETS_REQUEST,
    FETCH_TWEETS_REQUEST_SUCCESS,
    FETCH_TWEETS_REQUEST_ERROR,
} from '../actions/constants'
import { fetchTweetsRequestError, fetchTweetsRequestSuccess } from '../actions'

/**
 * Tweets fetch flow
 * Very similar to log in saga!
 */
export function* fetchFlow() {
    while (true) {
        try {
            const request = yield take(FETCH_TWEETS_REQUEST)
            const { userName } = request
            const res = yield call(auth.fetchTweetsByUserName, userName)
            if (res.status === 200) {
                yield put(fetchTweetsRequestSuccess(res.data))
            }
        } catch (err) {
            yield put(
                fetchTweetsRequestError('Ooooops! Error in fetching tweets')
            )
        }
    }
}

// The root saga is what we actually send to Redux's middleware. In here we fork
// each saga so that they are all "active" and listening.
// Sagas are fired once at the start of an app and can be thought of as processes running
// in the background, watching actions dispatched to the store.
export default function* root() {
    yield fork(fetchFlow)
}
