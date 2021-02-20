import React from 'react';
import { SetTitle, SetAppState } from './decorator';

@SetAppState()
@SetTitle('decorator test')
class App extends React.Component {

    constructor(props: any) {
        super(props);

        console.log('App')
        console.log({ ...this.props })
    }

    componentDidMount() {
        console.log('App mounted')
    }

    render() {
        return (
            <div>papago</div>
        )
    }
}

export default App;
