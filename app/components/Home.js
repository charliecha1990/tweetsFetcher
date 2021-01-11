import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import FetchButton from './FetchButton'
import Table from './Table'
import LoadingButton from './common/LoadingButton'
import ErrorMessage from './common/ErrorMessage'
import { fetchTweetsRequestError } from '../actions'

function Home() {
    const loading = useSelector((state) => state.loading) || false
    const error = useSelector((state) => state.error) || ''
    const dispatch = useDispatch()
    const handleMessageClose = () => dispatch(fetchTweetsRequestError())

    return (
        <Grid>
            <Grid container justify="center">
                <h1>Tweets Fetcher</h1>
            </Grid>
            <Grid container justify="center">
                <FetchButton />
            </Grid>
            <Grid container justify="center">
                <Grid item xs={10}>
                    {!loading && error === '' && <Table />}
                    {error !== '' && (
                        <ErrorMessage
                            severity="error"
                            onMessageClose={handleMessageClose}
                            message={error}
                            open={error !== ''}
                        />
                    )}
                    <Grid container justify="center">
                        {loading && <LoadingButton />}
                    </Grid>
                </Grid>
            </Grid>
            <Grid container justify="center">
                <span>
                    Please note that due to account restriction, a maximum of 50
                    requests can be made hourly
                </span>
            </Grid>
        </Grid>
    )
}

export default Home
