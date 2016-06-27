import React, { Component } from 'react'; //Need React whenever you use JSX. {} pulls off a single component from the library called component as component.
//Functional component is just a function. Class component is used when you want internal record keeping.

export default class SearchBar extends Component {
    render() {
        return <input/>;
    }
}

//export default SearchBar; //Export default makes it so that the default thing we import when we use the file is the element we specify here.