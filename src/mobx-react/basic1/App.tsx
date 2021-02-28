import * as React from "react";
import { observer, inject } from "mobx-react";
import BaseStore from './store';

interface IProps {
    store: BaseStore
}

@inject((store) => ({ store: new BaseStore() }))
@observer
class App extends React.Component<IProps> {

    static defaultProps = { store: {} }

    render() {
        const { store } = this.props;

        return (
            <div>
                <button onClick={store.add}>{store.count}</button>
            </div>
        )
    }
}

export default App;

///////////////////////////////////////////////

// const store = new BaseStore();

// const App = () => {
//     return (
//         <div>
//             <button onClick={store.add}>{store.count}</button>
//         </div>
//     )
// }

// export default observer(App);
