import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}))

const ErrorMessage = ({ severity, message, open, onMessageClose }) => {
    const classes = useStyles()

    /*   See how severity works
     *   <Alert severity="error">This is an error message!</Alert>
     *   <Alert severity="warning">This is a warning message!</Alert>
     *   <Alert severity="info">This is an information message!</Alert>
     *   <Alert severity="success">This is a success message!</Alert>
     */

    return (
        <div className={classes.root}>
            <Snackbar
                open={open}
                autoHideDuration={2000}
                onClose={onMessageClose}
            >
                <Alert onClose={onMessageClose} severity={severity}>
                    {message}
                </Alert>
            </Snackbar>
        </div>
    )
}

ErrorMessage.propTypes = {
    severity: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
    onMessageClose: PropTypes.func.isRequired,
}

export default ErrorMessage
