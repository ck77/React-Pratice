import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import UserStore from './User.store';
import { IAppStore } from './store';

interface IProps {
    store: UserStore
}

@inject((store: IAppStore) => ({ store: store.UserStore }))
@observer
class User extends Component<IProps> {
    static defaultProps = { store: {} }
    render() {

        return (
            <div>
                {this.props.store.user}

                <button onClick={this.props.store.changeName}>+++</button>
            </div>
        );
    }
}

export default User;