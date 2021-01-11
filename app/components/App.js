import React from 'react'
import { connect } from 'react-redux'

function App() {
    return (
        <div className="wrapper">
            <Nav
                currentlySending={this.props.data.currentlySending}
                history={this.props.history}
                dispatch={this.props.dispatch}
                location={this.props.location}
            />
            {this.props.children}
        </div>
    )
}

function select(state) {
    return {
        data: state,
    }
}

export default connect(select)(App)
