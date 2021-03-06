import React, { Component } from 'react';


class MyForm extends Component {

    getData = () => {
        return {
            name: 'sss'
        }
    }

    render() {
        return (
            <div>SSSSS</div>
        )
    }
}

class App extends Component {

    myRef = React.createRef<MyForm>();

    componentDidMount() {
        console.log(this.myRef.current?.getData())
    }

    render() {
        return (
            <div>
                <MyForm ref={this.myRef} />
            </div>
        );
    }
}

export default App;