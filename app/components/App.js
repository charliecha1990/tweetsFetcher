import React from 'react'

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

export default App
