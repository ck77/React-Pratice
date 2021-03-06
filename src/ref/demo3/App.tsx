import React, { Component, useState } from 'react';


const MyForm = () => {

    const [name, setName] = useState('');

    return (
        <div>
            <p>{name}</p>
            <input onChange={event => setName(event.target.value)}></input>
        </div>
    )
}

class App extends Component {

    handleClick = () => {

    }

    render() {
        return (
            <div>
                <MyForm />
                <button></button>
            </div>
        );
    }
}

export default App;