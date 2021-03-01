import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import CountStore from './Count.store';
import { IAppStore } from './store';

interface IProps {
    store: CountStore
}

@inject((store: IAppStore) => ({ store: store.CountStore }))
@observer
class Count extends Component<IProps> {
    static defaultProps = { store: {} }

    render() {

        const { store } = this.props;

        return (
            <div>
                <div>
                    <p>{store.count}</p>
                </div>
                <div><button onClick={store.increment}>increment</button></div>
                <div><button onClick={store.decrease}>decrease</button></div>

                {
                    store.IsMoreThen50 && <p>more then 50</p>
                }
            </div>
        );
    }
}

export default Count;