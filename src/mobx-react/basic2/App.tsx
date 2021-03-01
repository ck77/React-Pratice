// App.jsx
import React from "react";
import { Provider } from "mobx-react";
import { AppStore } from "./store";
import Count from './Count';

class App extends React.Component {
    render() {
        return (
            <Provider {...AppStore}>
                <Count />
            </Provider>
        )
    }
}

export default App;


// const App = () => {
//     React.useEffect(() => {
//         stores.UserStore.fetchUserInfo();
//     });

//     return <Parent />;
// };

// render(
//     <Provider {...stores}>
//         <App />
//     </Provider>,
//     document.getElementById("app")
// );
