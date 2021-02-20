import React, { useEffect, useState } from 'react';

const ComponentA = ({ count }: { count: number }) => {
    useEffect(() => {
        console.log('render A')
    });

    return (
        <div>{count}</div>
    )
}

const ComponentB = () => {
    useEffect(() => {
        console.log('render B')
    });

    return (
        <div>ComponentB</div>
    )
}

const App = () => {
    const [count, setCount] = useState<number>(0);

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <button onClick={handleClick}>Click</button>
            <ComponentA count={count} />
            <ComponentB />
        </div>
    )
}

export default App;