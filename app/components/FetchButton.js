import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import debounce from 'lodash/debounce'

import { fetchTweetsRequest } from '../actions'

const useStyles = makeStyles({
    button: {
        margin: '10px',
    },
})

function FetchButton() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const debouncedWrapper = (func) => useCallback(debounce(func, 500), [])
    const fetchTweetsByUserName = (userName) =>
        debouncedWrapper(dispatch(fetchTweetsRequest(userName)))

    return (
        <Grid container justify="center">
            <Button
                onClick={() => fetchTweetsByUserName('HillaryClinton')}
                variant="contained"
                color="primary"
                className={classes.button}
            >
                <span>Hillary Clinton</span>
            </Button>
            <Button
                onClick={() => fetchTweetsByUserName('BillClinton')}
                variant="contained"
                color="primary"
                className={classes.button}
            >
                <span>Bill Clinton</span>
            </Button>
        </Grid>
    )
}

// Wrap the component to inject dispatch and state into it
export default FetchButton
