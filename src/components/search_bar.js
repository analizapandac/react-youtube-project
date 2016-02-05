// component for the search bar area of our video player project

import React, { Component } from 'react';
// const Component = React.Component;

// class-based component
class SearchBar extends Component{

    constructor(props) {
        super(props); // call the parent method

        this.state = { term: '' }; //when we create a new state we initialize it by declaring this.state. 'term' here is just the property that we use as reference to the value of the input search
    }

    // define methods on a class
    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.term} // by providing its value it becames a controlled component / field
                    onChange={ event => this.onInputChange(event.target.value) } />
            </div>
        );
    }

    // event handler
    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

// new SearchBar

// export the component
export default SearchBar;
