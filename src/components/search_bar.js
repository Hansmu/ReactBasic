import React, { Component } from 'react'; //Need React whenever you use JSX. {} pulls off a single component from the library called component as component.
//Functional component is just a function. Class component is used when you want internal record keeping.
//Should use a functional component by default and only refactor if it looks like you're going to need a class based component.
export default class SearchBar extends Component {
    constructor(props) { //All JS classes have a constructor. Automatically called when a new instance of the class is created.
        super(props); //Call parent class constructor.
        this.state = { term: '' }; //When we use state, we initialize it and set it to this.state.
    }

    render() { //Must always have a render method in a component.
        return <input onChange={this.onInputChange} />; //When the input changes, then run the method onInputChange. Whenever we use JS variables we use {}.
        //return <input onChange={ (event)=>console.log(event.target.value) } />;
    }

    onInputChange(event) { //All browser events that get triggered by elements like input or such. Whenever we add an event handler, they're always called with an event object.
        // We can name it whatever we want. Event object describes the event that happened
        console.log(event.target.value);
    }
}

//export default SearchBar; //Export default makes it so that the default thing we import when we use the file is the element we specify here.