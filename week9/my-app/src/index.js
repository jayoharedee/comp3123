import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Greeter from './components/Greeter/index'
import LikeMe from './components/likeButton/index'
import * as serviceWorker from './serviceWorker';

const Display = () => {
    var buttonArray = []
    for(var i = 0; i<10;i++){
        buttonArray.push(<LikeMe />)
    }
    return (
        <>
            <Greeter />
            
            {buttonArray}
        </>
      );
}
 
export default Display;

ReactDOM.render(<Display />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
