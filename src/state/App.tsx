import React, { useState } from 'react';

interface IMyProp {
    name: string;
    age: number;
}

interface IMyState {
    a: IMyProp;
    b: IMyProp;
}

const state1: IMyState = {
    a: {
        name: 'aaa',
        age: 10
    },
    b: {
        name: 'bbb',
        age: 20
    }
}

const state2: IMyState = {
    a: {
        name: 'aaa',
        age: 10
    },
    b: {
        name: 'bbb',
        age: 30
    }
}

const App = () => {

    const [state, Setstate] = useState<IMyState>(state1);

    const handleChange = () => {
        Setstate(state2);
    }

    return (
        <div>
            <button onClick={handleChange}>Change</button>
            <p>{state.a.name}</p>
            <p>{state.b.age}</p>
        </div>
    )
}

export default App;