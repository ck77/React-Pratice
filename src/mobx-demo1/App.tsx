import React from 'react';
import { observer, Provider, inject } from 'mobx-react';
import { StoreContext, StoreProvider, StoreComponent } from './UseStore'
import RootStore from './store/RootStore'

// import { CountStore } from './store'
@inject('store')
@observer
class Counter extends React.Component {

    render() {

        console.log(this.props)

        return (
            <div>
                <p>Count</p>
            </div>
        )
    }
}

const store = new RootStore();

class App extends React.Component {

    render() {

        return (
            <StoreProvider store={store}>
                <Counter />
            </StoreProvider>
        )
    }
}

export default App;