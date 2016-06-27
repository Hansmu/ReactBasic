//Every file that we write is separated from other code that we write, so we have to use imports to get access to other files.
import React from 'react'; //Knows how to work with React components.
import ReactDOM from 'react-dom'; //To render the elements to the actual DOM.

//Create a new component. This component should produce some HTML.
const App = () => { // const is ES6 syntax. A constant. => Fat arrow ES6 syntax to declare a function.
    return <div>Hi!</div>; //JSX - lets us write HTML looking code that's really just Javascript. JSX needs to be translated, can't be understood normally by a browser.
    //Without JSX, the code would be a lot less readable and lengthier.
}

//Take this component's generated HTML and put it on the page(In the DOM)
ReactDOM.render(<App />, document.querySelector('.container')); // Have to use <App /> to create an instance from the class App.
// Second argument is a target container, where to render it in the HTML.

//Run command: npm start