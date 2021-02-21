import React, { useEffect } from 'react';

const AutoFocus1 = () => {

    // the same use useRef & createRef
    const textInput = React.useRef<HTMLInputElement>(null);
    // const textInput = React.createRef<HTMLInputElement>();

    useEffect(() => {
        if (textInput.current) {
            textInput.current.focus();
        }
    }, []);

    const handleClick = () => {
        if (textInput.current) {
            textInput.current.focus();
        }
    }

    return (
        <div>
            <input ref={textInput} />
            <button onClick={handleClick}>Click</button>
        </div>
    )
}

class AutoFocus2 extends React.Component {

    private input = React.createRef<HTMLInputElement>();

    render() {
        return (
            <div>
                <input ref={this.input} />
            </div>
        )
    }

    componentDidMount() {
        if (this.input.current) {
            this.input.current.focus()
        }
    }
}

const useFocus = () => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const setFocus = () => {

        console.log('sssss')
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }

    return [inputRef, setFocus]
}

const AutoFocus3 = () => {
    const [inputRef, setInputFocus] = useFocus();

    const handleClick = () => {
        setInputFocus
    }

    return (
        <div>
            <input ref={inputRef} />
            <button onClick={handleClick}>Focus</button>
        </div>
    )
}

class App extends React.Component {

    render() {
        return (
            <div>
                {/* <AutoFocus1 /> */}
                <AutoFocus2 />

            </div>
        );
    }
}

export default App;