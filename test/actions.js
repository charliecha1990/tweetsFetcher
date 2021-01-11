import test from 'ava'
import {actionTest} from 'redux-ava'
import {
  fetchTweetsRequest,
  fetchTweetsRequestError
} from '../app/actions'


const BILL_CLINTON = 'BillClinton';
const HILLARY_CLINTON = 'HillaryClinton';

const errorMessage = 'Ooooops! Error in fetching tweets'

test('fetchTweetsRequest action',
  actionTest(fetchTweetsRequest, userName, { type: 'FETCH_TWEETS_REQUEST', userName: BILL_CLINTON || HILLARY_CLINTON }))

test('fetchTweetsRequestError action',
  actionTest(fetchTweetsRequestError, error, { type: 'FETCH_TWEETS_REQUEST_ERROR', error:  errorMessage }))
