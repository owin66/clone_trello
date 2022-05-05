import React, {Component} from 'react'
import TrelloList from "./TrelloList";
import {connect} from 'react-redux'


class App extends Component {
    render() {
        const {lists} = this.props;
        return (
            <div className="App">
                <h2>Hello YouTube</h2>
                <h2>Hello YouTube</h2>
                {lists.map(list => (
                    <TrelloList title={list.title}
                                cards={list.cards}/>
                ))}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        lists: state.myLists
    }
}


export default connect(mapStateToProps)(App);
