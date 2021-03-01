import * as React from 'react';
import { observer, inject } from 'mobx-react';
import DemoStore from './Demo.store';

interface IProps {
    store: DemoStore;
}

@inject((store) => ({ store: new DemoStore() }))
@observer
export default class Demo extends React.Component<IProps, {}> {
    render() {
        const { store } = this.props;
        return (
            <div className="page">
                <p>
                    <a href="https://mobxjs.github.io/mobx/refguide/action.html">Actions in MobX</a> are
          functions that mutate observable data.
          Using actions is optional unless `mobx.useStrict(true)` is used.
          Combined wih the MobX devtools, they achieve many of the same benefits
          that actions in Redux, Flux, and other event sourcing patterns provide.
        </p>
                <p>
                    Mutations during an action are batched in a transaction,
                    so downstream data that depends on the changes does not update
                    until the action completes.
        </p>
                <p>
                    MobX allows you to react to any observable data changes via `reaction` and `autorun`,
                    which have similar purposes but different characteristics.
                    In this example the observable counter is watched by a reaction and the number of times
                    it appears to change is tracked as the "counter reaction count".
                    It is also watched by an autorun which is counted as "counter autorun count".
        </p>
                <p>
                    In this example, the counter is mutated many times on every click.
                    It demonstrates how two types of downstream data,
                    computed properties used in a React component and reactions/autorun,
                    will run only a single time when the upstream data changes are wrapped in an action.
        </p>
                <div><small>counter:</small> {store!.counter}</div>
                <div><small>counter squared:</small> {store!.counterSquared}</div>
                <div>
                    <small>counter squared compute count:</small>{' '}
                    {store!.counterSquaredComputeCount}
                </div>
                <div>
                    <small>counter reaction count:</small>{' '}
                    {store!.counterReactionCount}
                </div>
                <div>
                    <small>counter autorun count:</small>{' '}
                    {store!.counterAutorunCount}
                </div>
                <div className="form-group btns-vertical">
                    <button className="pure-button" onClick={store!.incrementWithAction}>
                        increment and decrement many times in an action
          </button>
                    <button className="pure-button" onClick={store!.increment}>
                        increment and decrement many times without an action
          </button>
                </div>
                <div className="form-group">
                    <button className="pure-button" onClick={store!.reset}>
                        reset
          </button>
                </div>
            </div>
        );
    }
}