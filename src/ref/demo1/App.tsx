import React, { Component, useState } from 'react';

// 只能用在基本元素 input, div ...
const Search = React.forwardRef<HTMLInputElement>((props, ref) => {
    return <input ref={ref} type="search" />;
});


class App extends Component {

    private inputRef = React.createRef<HTMLInputElement>();

    componentDidMount() {
        if (this.inputRef.current) {
            this.inputRef.current.focus();
        }
    }

    render() {
        return (
            <Search ref={this.inputRef} />
        );
    }
}

export default App;