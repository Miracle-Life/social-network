import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postData = [
    {
        id: 1,
        title: "Hi, how are you?",
        likes: 5
    },
    {
        id: 2,
        title: "Its my first post",
        likes: 43
    },
]
let dialogsData = [
    {
        name: "Denys",
        id: 1
    },
    {
        name: "Darya",
        id: 2
    },
    {
        name: "Alex",
        id: 3
    },
    {
        name: "Andrey",
        id: 4
    },
    {
        name: "Ihor",
        id: 5
    },
]
let messageData = [
    {
        id: 1,
        message: "Hi"
    },
    {
        id: 2,
        message: "How is you"
    },
    {
        id: 3,
        message: "Yo"
    },
]

ReactDOM.render(
    <React.StrictMode>
        <App postData={postData} dialogsData={dialogsData} messageData={messageData}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
