import React from "react";
import { Provider } from "mobx-react";
import { AppStore } from './app.store';
import Product from './product.component';

class App extends React.Component {
    render() {
        return (
            <Provider {...AppStore}>
                <Product />
            </Provider>
        )
    }
}

export default App;