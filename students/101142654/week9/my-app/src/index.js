import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Greeter from './Greeter';
import LikeButton from './LikeButton';
import * as serviceWorker from './serviceWorker';

//inline component
const Display = () => {
    return(
        <>
            < Greeter /> 
            < LikeButton />
        </>
    );
}
 
export default Display;

ReactDOM.render(
    <Display />, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
